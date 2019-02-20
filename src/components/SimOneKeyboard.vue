<template lang="pug">
  #simone-keys(:class="baseClass", :style="{width: computedWidth}")
    .digit-keyboard-row(:style="{zoom: zoom}")
      .digit-keyboard-key-wrapper
        .digit-keyboard-key(@click="keyClick(1)")
          .digit-keyboard-key-number
            | 1
            .digit-keyboard-key-letters
      .digit-keyboard-key-wrapper
        .digit-keyboard-key(@click="keyClick(2)")
          .digit-keyboard-key-number
            | 2
            .digit-keyboard-key-letters ABC
      .digit-keyboard-key-wrapper
        .digit-keyboard-key(@click="keyClick(3)")
          .digit-keyboard-key-number
            | 3
            .digit-keyboard-key-letters DEF


    .digit-keyboard-row(:style="{zoom: zoom}")
      .digit-keyboard-key-wrapper
        .digit-keyboard-key(@click="keyClick(4)")
          .digit-keyboard-key-number
            | 4
            .digit-keyboard-key-letters GHI
      .digit-keyboard-key-wrapper
        .digit-keyboard-key(@click="keyClick(5)")
          .digit-keyboard-key-number
            | 5
            .digit-keyboard-key-letters JKL
      .digit-keyboard-key-wrapper
        .digit-keyboard-key(@click="keyClick(6)")
          .digit-keyboard-key-number
            | 6
            .digit-keyboard-key-letters MNO


    .digit-keyboard-row(:style="{zoom: zoom}")
      .digit-keyboard-key-wrapper
        .digit-keyboard-key(@click="keyClick(7)")
          .digit-keyboard-key-number
            | 7
            .digit-keyboard-key-letters PQRS
      .digit-keyboard-key-wrapper
        .digit-keyboard-key(@click="keyClick(8)")
          .digit-keyboard-key-number
            | 8
            .digit-keyboard-key-letters TUV
      .digit-keyboard-key-wrapper
        .digit-keyboard-key(@click="keyClick(9)")
          .digit-keyboard-key-number
            | 9
            .digit-keyboard-key-letters WXYZ


    .digit-keyboard-row(:style="{zoom: zoom}")
      .digit-keyboard-key-wrapper
        .digit-keyboard-key(@click="keyClick('*')")
          .digit-keyboard-key-number
            | *
            .digit-keyboard-key-letters ,
      .digit-keyboard-key-wrapper
        .digit-keyboard-key(@click="keyClick(0)")
          .digit-keyboard-key-number
            | 0
            .digit-keyboard-key-letters +
      .digit-keyboard-key-wrapper
        .digit-keyboard-key(@click="keyClick('#')")
          .digit-keyboard-key-number
            | #
            .digit-keyboard-key-letters ;


    .digit-keyboard-row(:style="{zoom: zoom}")
      .digit-keyboard-key-wrapper(:style="{visibility: leftActionButton.visibility}")
        .digit-keyboard-key(@click="keyClick('left')")
          .digit-keyboard-key-action(:style="{fontSize: leftActionButton.fontSize}")
            ion-icon(v-if="leftActionButton.iconName", :name="leftActionButton.iconName")
            div(v-if="!leftActionButton.iconName && leftActionButton.text")
              | {{leftActionButton.text}}
      .digit-keyboard-key-wrapper
        .digit-keyboard-key(@click="keyClick('dial')")
          .digit-keyboard-key-action(:style="{fontSize: rightActionButton.fontSize}")
            ion-icon(name="call")
      .digit-keyboard-key-wrapper(:style="{visibility: rightActionButton.visibility}")
        .digit-keyboard-key(@click="keyClick('backspace')")
          .digit-keyboard-key-action(:style="{fontSize: rightActionButton.fontSize}")
            ion-icon(v-if="rightActionButton.iconName", :name="rightActionButton.iconName")
            div(v-if="!rightActionButton.iconName && rightActionButton.text")
              | {{rightActionButton.text}}
</template>

<script lang="ts">
  import { Component, Prop, Vue, Emit, Watch } from "vue-property-decorator";

  const defaultSettings = {
    theme: "chumaumenze",
    width: "100%",
    align: "center",
    animation: "slide",
    leftActionButton: {
      visibility: "hidden",  // same as false
      fontSize: "1.4em",
      iconName: "ios-close",
      text: "_",
    },
    rightActionButton: {
      visibility: "visible",
      fontSize: "1.4em",
      iconName: "ios-backspace",
      text: ".",
    },
  };

  const alignments = ["left", "center", "right"];
  const animations: string[] = ["slide", "pop"];
  const keyboardThemes: string[] = [
    "light", "dark", "ionic", "opaque-black", "opaque-white",
    "dusk", "nepal", "chumaumenze", "messenger",
  ];

  @Component
  export default class SimOneKeyboard extends Vue {

    @Prop({type: Boolean, default: true}) private visible?: boolean;
    // @Prop() private resize: string = undefined; // @TODO: Implement content resizing
    // public animations: string[] = ["slide", "pop"]; // @TODO

    // private _swipeGesture: GestureContoller;
    // private clickSub: any = new Subject();  // Observables
    // private showSub: any = new Subject();  // Swipe gesture
    // private hideSub: any = new Subject();
    private _isSwiping?: boolean;
    private zoom: number = 1;
    @Prop({type: [String, Number], default: defaultSettings.width}) private width?: string;
    @Prop({type: Boolean}) private roundButtons?: boolean;
    @Prop({type: Boolean}) private showLetters?: boolean;
    @Prop({type: Boolean}) private swipeHide?: boolean;

    @Prop({type: String, default: defaultSettings.theme,
      validator(value: string): boolean {
        return keyboardThemes.includes(value);
      },
    }) private theme?: string;

    @Prop({type: String, default: defaultSettings.align,
      validator(value: string): boolean {
        return alignments.includes(value);
      },
    }) private align?: string;

    @Prop({type: String, default: defaultSettings.animation,
      validator(value: string): boolean {
      return animations.includes(value);
      },
    }) private animation?: string;


    @Prop({
      type: Object,
      default: () => defaultSettings.leftActionButton,
      validator(value: [object, boolean]): boolean {
        // if (typeof value === "boolean") {
        //   this.leftActionButtonOptions.visibility = (value ? "visible" : "hidden");
        // } else if (typeof(value) === "object") {
        //   this.leftActionButtonOptions = value;
        // } else {
        //   console.warn(`Invalid [leftActionButtonOptions] value "${value}". Using default`);
        //   this.leftActionButtonOptions = defaultSettings.leftActionButton;
        // }
        return true;
      },
    }) private leftActionButton?: ActionOptions;


    @Prop({
      type: Object,
      default: () => defaultSettings.rightActionButton,
      validator(value: object): boolean {
        // if (typeof value === "boolean") {
        //   switch (value) {
        //     case false: {
        //       // this._rightActionOptions = {visibility: "hidden"};
        //       defaultSettings.rightActionButton.visibility = "hidden";
        //       this.rightActionButtonOptions = defaultSettings.rightActionButton;
        //       break;
        //     }
        //     case true: {
        //       defaultSettings.rightActionButton.visibility = "visible";
        //       this.rightActionButtonOptions = defaultSettings.rightActionButton;
        //       break;
        //     }
        //     default: {
        //       this.rightActionButtonOptions = defaultSettings.rightActionButton;
        //       break;
        //     }
        //   }
        // } else if (typeof(value) === "object") {
        //   this.rightActionButtonOptions = value;
        // } else {
        //   console.warn(`Invalid [rightActionButtonOptions] value "${value}". Using default`);
        //   this.rightActionButtonOptions = defaultSettings.rightActionButton;
        // }
        return true;
      },
    }) private rightActionButton?: ActionOptions;


    protected ready() {
      window.addEventListener("resize", this.onWindowResize);
    }

    protected beforeMount() {
      this.adjustZoomLevel();
      // this.initSwipeGesture();
    }

    protected beforeDestroy() {
      // @TODO unsubscribe and use clear() method
      window.removeEventListener("resize", this.onWindowResize);
    }


    private get computedWidth() {
      const isPercent = String(this.width).endsWith("%");
      return `${this.width}${isPercent ? "" : "px"}`;
    }


    get baseClass(): string[] {
      return [
        `keyboard-${this.theme}`,
        `align-${this.align}`,
        `${this.roundButtons ? "round-buttons" : ""}`,
        `${this.showLetters === false ? "no-letters" : ""}`,
        `${this.visible ? "visible" : ""}`,
      ];
    }


    // @Prop({type: String, default: defaultSettings.theme, validator(value: string): boolean {
    //     return keyboardThemes.includes(value);
    //     if (this.keyboardThemes.includes(value)) {
    //       this._theme = value;
    //     } else {
    //       console.error(`Invalid [theme] value "${v}". Theme must be either of ${this.keyboardThemes}`);
    //       throw new Error(`Invalid [theme] value "${v}".`);
    //     }
    //   },
    // }) private theme?: string;


    // @Prop({type: String, default: defaultSettings.align}) set align(v: string) {
    //   if (["left", "center", "right"].includes(v)) {
    //     this._align = v;
    //   } else {
    //     console.warn(`Invalid [align] value "${v}". Using default "${defaultSettings.align}"`);
    //     this._align = defaultSettings.align;
    //   }
    // }


    // @Prop({type: String, default: defaultSettings.animation}) set animation(v: string) {
    //   if (animations.includes(v)) {
    //     this._animation = v;
    //   } else {
    //     console.warn(`Invalid [animation] value "${v}".
    //     Using default "${defaultSettings.animation}"`);
    //     this._animation = defaultSettings.animation;
    //   }
    // }


    // @Prop({
    //   type: Object,
    //   default: () => defaultSettings.leftActionButton,
    // })
    // set leftActionButtonOptions(v: boolean | ActionOptions) {
    //   if (typeof v === "boolean") {
    //     this._leftActionOptions = {visibility: (v ? "visible" : "hidden")};
    //   } else if (typeof(v) === "object") {
    //     this._leftActionOptions = v || defaultSettings.leftActionButton;
    //   } else {
    //     console.warn(`Invalid [leftActionButtonOptions] value "${v}". Using default`);
    //     this._leftActionOptions = defaultSettings.leftActionButton;
    //   }
    // }


    // @Prop({
    //   type: Object,
    //   default: () => defaultSettings.rightActionButton,
    // })
    // set rightActionButtonOptions(v: boolean | ActionOptions) {
    //   if (typeof v === "boolean") {
    //     switch (v) {
    //       case false: {
    //         // this._rightActionOptions = {visibility: "hidden"};
    //         defaultSettings.rightActionButton.visibility = "hidden";
    //         this._rightActionOptions = defaultSettings.rightActionButton;
    //         break;
    //       }
    //       case true: {
    //         defaultSettings.rightActionButton.visibility = "visible";
    //         this._rightActionOptions = defaultSettings.rightActionButton;
    //         break;
    //       }
    //       default: {
    //         this._rightActionOptions = defaultSettings.rightActionButton;
    //         break;
    //       }
    //     }
    //   } else if (typeof(v) === "object") {
    //     this._rightActionOptions = v;
    //   } else {
    //     console.warn(`Invalid [rightActionButtonOptions] value "${v}". Using default`);
    //     this._rightActionOptions = defaultSettings.rightActionButton;
    //   }
    // }



    /**
     * Called when any keyboard button is clicked
     *
     * @param {string | number} key
     *
     * @memberOf SimOneKeyboard
     */
    @Emit()
    private keyClick(key: string | number) {
      console.info(`Clicked ${key}`);
      return key;
    }

    @Watch("visible")
    private playAnimation() {}


    /**
     * Called on window resize.
     *
     */
    public onWindowResize(event: any): void {
      // @TODO resize content
      // .parentElement.parentElement.querySelector(this.resize);
      //     height: calc(100% - 287px);

      this.adjustZoomLevel();
    }


    // get onClick() {
    //   return this.clickSub;
    // }
    //
    //
    // get onShow() {
    //   return this.showSub;
    // }
    //
    //
    // get onHide() {
    //   return this.hideSub;
    // }


    /**
     * Call this method to show the keyboard.
     *
     * @public
     *
     * @memberOf SimOneKeyboard
     */
    public show(callback = () => {}) {}


    /**
     * Call this method to hide the keyboard.
     *
     * @public
     *
     * @memberOf SimOneKeyboard
     */
    public hide(callback = () => {}) {}


    /**
     * Call this to destroy the current keyboard element.
     * You can pass a callback to be called right after.
     * Does not destroy the component it-self (yet).
     *
     * @public
     * @param {Function} callback
     *
     * @memberOf SimOneKeyboard
     */
    public destroy(callback = (success: boolean) => {}) {}


    /**
     * Adjust the keyboard zoom level.
     * Helps maintain proper visual.
     *
     * @private
     *
     * @memberOf SimOneKeyboard
     */
    private adjustZoomLevel(): void {
      const referenceHeight = 568; // iPhone 5
      const currentHeight = window.screen.height;
      this.zoom = currentHeight / referenceHeight;
    }


    /**
     * Init the swipe top to bottom gesture.
     *
     * @private
     *
     * @memberOf SimOneKeyboard
     */
    // private initSwipeGesture(): void {
    //   this._swipeGesture = new GestureContoller(this.el.nativeElement, {
    //     recognizers: [
    //       [Hammer.Swipe, {direction: Hammer.DIRECTION_VERTICAL}]
    //     ]
    //   });
    //   this._swipeGesture.listen();
    //   this._swipeGesture.on("swipedown", e => this.onSwipe(e));
    // }


    /**
     * Called when the user swipe the keyboard down.
     *
     * @param {Gesture} event
     *
     * @memberOf SimOneKeyboard
     */
    // private onSwipe(event: GestureContoller): void {
    //   if (this.swipeHide) {
    //     this._isSwiping = true;
    //     this.hide();
    //     setTimeout(() => this._isSwiping = false, event["deltaTime"] || 250);
    //   }
    // }


    /**
     * Log utility
     *
     * @private
     * @param {string} message
     * @param {string} [type="log | warning | error"]
     *
     * @memberOf SimOneKeyboard
     */
    // private static log(message: string, type: string = "log"): void {
    //   if (console) {
    //     let c = "#3690CB";
    //     c = (type === "error") ? "#e74c3c" : c;
    //     c = (type === "warning") ? "#f39c12" : c;
    //     console.log("%c◼︎ @clickSimOneKeyboard%c: " + message, "font-weight: bold; color: " + c + ";", "");
    //   }
    // }


    /**
     * Return the transition duration of an HTMLElement if exists.
     *
     * @private
     * @param {HTMLElement} el
     * @returns {Number}
     *
     * @memberOf SimOneKeyboard
     */
    // tslint: disable
    private static getTransitionDuration(el: HTMLElement): number {
      const ms = window.getComputedStyle(el, null).getPropertyValue("transition-duration").split(",")[0];
      const multiplier = ms.indexOf("s") > -1 ? 1000 : 1;
      return parseFloat(ms) * multiplier;
    }
  }


  // Include Google Analytics
  (() => {
    const GA_TRACKER_ID: string = process.env.GA_TRACKER_ID;
    console.info(`Google Analytics ID: ${GA_TRACKER_ID}`);

    const t = document.createElement("script");
    t.type = "text/javascript";
    t.innerText = `
    (function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,"script","//www.google-analytics.com/analytics.js","ga");

    ga("create", "${GA_TRACKER_ID}", "auto");  // Replace with your property ID.
    ga("send", "pageview");`;
    const e = document.getElementsByTagName("script")[0];
    e!.parentNode.insertBefore(t, e);
  })();


  interface ActionOptions {
    /**
     * Display the action button or not.
     */
    visibility?: string;
    /**
     * Optional font size adjustment.
     */
    fontSize?: string;
    /**
     * The action Ionic icon name to display.
     */
    iconName?: string;
    /**
     * A text to display on the action.
     */
    text?: string;
  }

  export interface SimoneKeyboardOptions {
    /**
     * Keyboard horizontal alignment (no effects on full width).
     */
    align?: string;
    /**
     * Keyboard width, can be expressed as number, in percent or pixels.
     */
    width?: string | number;
    /**
     * Keyboard (default) visibility.
     */
    visible?: boolean;
    /**
     * Keyboard left action options.
     */
    leftActionButton?: ActionOptions;
    /**
     * Keyboard right action options.
     */
    rightActionButton?: ActionOptions;
    /**
     * Display buttons rounded or squared.
     */
    roundButtons?: boolean;
    /**
     * Display letters under buttons number.
     */
    showLetters?: boolean;
    /**
     * If set to true, swiping the keyboard from top to bottom will hide it.
     */
    swipeToHide?: boolean;
    /**
     * Keyboard visual theme.
     * Available themes: SimOneKeyboard.themes
     */
    theme?: string;
  }
</script>

<style lang="scss" scoped>
  $simone-bg-color: transparent;
  $simone-btn-border-size: 1px;
  $simone-btn-height: 60px;
  $simone-btn-font-size: 24px;

  // Private variables (mostly default)
  $simone-btn-bg-color: #ccc;
  $simone-btn-border-color: #333;
  $simone-btn-text-color: #333;
  $simone-btn-action-color: #333;
  $simone-btn-click-bg-color: #ddd;
  $simone-btn-click-text-color: #444;

  $light: #fff !default;
  $dark: #444 !default;
  $opaque-black: rgba(#000, 0.75);
  $opaque-white: rgba(#fff, 0.75);

  #simone-keys {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: $simone-bg-color;
    font-size: $simone-btn-font-size;
    z-index: 5000;
    transition: transform linear 150ms;
    transform: translate3d(0, 100%, 0);

    &.visible {
      transform: translate3d(0, 0, 0);
    }

    /** {*/
      /*box-sizing: border-box;*/
    /*}*/

    // Row
    .digit-keyboard-row {
      display: flex;
      flex-direction: row;
      border-bottom: $simone-btn-border-size solid $simone-btn-border-color;

      // Wrapper
      .digit-keyboard-key-wrapper {
        flex: 1;
        text-align: center;
        position: relative;
        height: $simone-btn-height;

        // Key
        .digit-keyboard-key {
          display: block;
          margin: 0 auto;
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          border-right: $simone-btn-border-size solid $simone-btn-border-color;
          border-left: $simone-btn-border-size solid $simone-btn-border-color;
          //background: $simone-btn-bg-color;
          //color: $simone-btn-text-color;
          line-height: $simone-btn-height;
          transition: all 150ms ease-out;

          // Number
          .digit-keyboard-key-number {
            font-size: 1em;
            vertical-align: middle;
            display: inline-block;
            line-height: normal;
            text-align: center;
            margin-top: -0.40em;

            // Letters
            .digit-keyboard-key-letters {
              font-size: (($simone-btn-font-size*40)/100);
              line-height: (($simone-btn-font-size*40)/100);
              height: (($simone-btn-font-size*40)/100);
              margin-top: -0.25em;

              &.hidden {
                visibility: hidden;
              }
            }
          }

          // Action
          .digit-keyboard-key-action {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            line-height: $simone-btn-height;
            font-size: $simone-btn-font-size;
          }
        }

        &.hidden {
          visibility: hidden;
        }

        &:first-child .digit-keyboard-key {
          border-right: none;
        }

        &:last-child .digit-keyboard-key {
          border-left: none;

        }
      }

      &:first-child {
        border-top: $simone-btn-border-size solid $simone-btn-border-color;
      }

      &:last-child {
        border: none;

        .digit-keyboard-key-wrapper {
          .digit-keyboard-key {
            border-bottom: $simone-btn-border-size solid $simone-btn-border-color;
          }
        }
      }
    }

    // Align center
    &.align-center {
      margin: 0 auto;
    }

    // Align left
    &.align-left {
      margin-right: auto;
    }

    // Align right
    &.align-right {
      margin-left: auto;
    }

    // No letters
    &.no-letters {
      .digit-keyboard-row {
        .digit-keyboard-key-wrapper {
          .digit-keyboard-key {
            .digit-keyboard-key-number {
              margin-top: -0.30em;

              .digit-keyboard-key-letters {
                display: none;
              }
            }
          }
        }
      }
    }

    // Round buttons
    &.round-buttons {
      .digit-keyboard-row {
        border: none;

        .digit-keyboard-key-wrapper {
          margin: 10px 0 0 0;

          .digit-keyboard-key {
            width: $simone-btn-height;
            -webkit-border-radius: 100%;
            -moz-border-radius: 100%;
            border-radius: 100%;
            border: $simone-btn-border-size solid $simone-btn-border-color;

            &:active {
              transform: scale3d(0.95, 0.95, 1);
            }
          }
        }

        &:last-child .digit-keyboard-key-wrapper {
          margin-bottom: 10px;
        }
      }

      &.no-letters {
        .digit-keyboard-row {
          .digit-keyboard-key-wrapper {
            .digit-keyboard-key {
              .digit-keyboard-key-number {
                height: (($simone-btn-height*96)/100);
                line-height: (($simone-btn-height*96)/100);
              }
            }
          }
        }
      }
    }

    /*
    * Keyboard color styles
    */
    &.keyboard-light {
      [class^="digit-keyboard"] {
        border-color: darken($light, 10%) !important;
      }
      .digit-keyboard-key {
        background: $light;
        color: #444;

        &:active {
          background: darken($light, 10%);
        }

        /*&.dial-key {*/
          /*background: #00ff00 !important;*/
        /*}*/
      }
    }

    &.keyboard-dark {
      [class^="digit-keyboard"] {
        border-color: darken($dark, 10%) !important;
      }
      .digit-keyboard-key {
        background: $dark;
        color: #fff;

        &:active {
          background: lighten($dark, 10%);
        }
      }
    }

    &.keyboard-ionic {
      [class^="digit-keyboard"] {
        border: none !important;
      }

      background: #3782fe;

      .digit-keyboard-key {
        color: #fff;
        background: rgba(#fff, 0.1);

        .digit-keyboard-key-action {
          transition: color 150ms ease-out;
        }

        &:active {
          background: rgba(#fff, 0.25);
          transform: scale3d(0.95, 0.95, 1);

          .digit-keyboard-key-action {
            color: rgba(#fff, 0.5);
          }
        }
      }
    }

    &.keyboard-opaque-black {
      [class^="digit-keyboard"] {
        border-color: $opaque-black !important;
      }
      .digit-keyboard-key {
        background: rgba(#000, 0.15);
        color: $opaque-black;

        &:active {
          background: rgba(#000, 0.25);
        }
      }
    }

    &.keyboard-opaque-white {
      background: $opaque-black;

      [class^="digit-keyboard"] {
        border-color: $opaque-white !important;
      }
      .digit-keyboard-key {
        background: rgba(#fff, 0.10);
        color: $opaque-white;

        &:active {
          background: rgba(#fff, 0.25);
        }
      }
    }

    &.keyboard-dusk {
      [class^="digit-keyboard"] {
        border: none !important;
      }

      background: #19547b;
      background: linear-gradient(45deg, #19547b 0%, #ffd89b 98%);
      filter: progid:DXImageTransform.Microsoft.gradient(
              startColorstr="#19547b", endColorstr="#ffd89b", GradientType=1);

      .digit-keyboard-key {
        color: $opaque-white;

        .digit-keyboard-key-action {
          /*background: rgba(#000, 0.1);*/
        }

        &:active {
          color: #fff;
          background: rgba(#000, 0.05);
          transform: scale3d(0.95, 0.95, 1);
        }
      }
    }

    &.keyboard-nepal {
      [class^="digit-keyboard"] {
        border: none !important;
      }

      background: #de6161;
      background: linear-gradient(45deg, #de6161 0%, #2657eb 98%);
      filter: progid:DXImageTransform.Microsoft.gradient(
              startColorstr="#de6161", endColorstr="#2657eb", GradientType=1);

      .digit-keyboard-key {
        color: $opaque-white;

        .digit-keyboard-key-action {
          /*background: rgba(#fff, 0.1);*/
        }

        &:active {
          color: #fff;
          background: rgba(#fff, 0.05);
          transform: scale3d(0.95, 0.95, 1);

          .digit-keyboard-key-action {
            background: rgba(#fff, 0.12);
          }
        }
      }
    }

    &.keyboard-chumaumenze {
      [class^="digit-keyboard"] {
        border-color: rgba(#fff, 0.25) !important;
      }

      background: #E8CC00;
      background: linear-gradient(45deg, #E8CC00 0%, #db36a4 98%);
      filter: progid:DXImageTransform.Microsoft.gradient(
              startColorstr="#E8CC00", endColorstr="#db36a4", GradientType=1);

      .digit-keyboard-key {
        color: #fff;

        /*.digit-keyboard-key-action {*/
          /*background: rgba(#fff, 0.1);*/
        /*}*/

        &:active {
          background: rgba(#fff, 0.15);
        }
      }
    }

    &.keyboard-messenger {
      [class^="digit-keyboard"] {
        border: none !important;
      }

      background: #00c6ff;
      background: linear-gradient(45deg, #00c6ff 0%, #0072ff 98%);
      filter: progid:DXImageTransform.Microsoft.gradient(
              startColorstr="#00c6ff", endColorstr="#0072ff", GradientType=1);

      .digit-keyboard-key {
        color: #fff;
        background: rgba(#fff, 0.1);

        .digit-keyboard-key-action {
          transition: color 150ms ease-out;
        }

        &:active {
          background: rgba(#fff, 0.25);
          transform: scale3d(0.95, 0.95, 1);

          .digit-keyboard-key-action {
            color: rgba(#fff, 0.5);
          }
        }
      }
    }

    // Animation: slide-up
    /*&.animation-slide {
        -webkit-transition: transform linear 150ms;
        transition: transform linear 150ms;
        transform: translate3d(0,0,0);
    }

    &.animation-slide.hidden {
        transform: translate3d(0,100%,0);
    }*/

    // Animation: pop
    /*&.animation-pop {
        -webkit-transition: transform linear 150ms;
        transition: transform linear 150ms;
        transform: scale3d(1, 1, 1);
    }

    &.animation-pop.hidden {
        transform: scale3d(0, 0, 1);
    }*/
  }
</style>
