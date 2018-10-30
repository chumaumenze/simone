import {
    Component, ElementRef, EventEmitter, HostBinding,
    Input, OnDestroy, OnInit, Output, Renderer
} from '@angular/core';
import {Subject} from 'rxjs';
import {ActionOptions} from '../../interfaces/action.interface';
import {environment} from '../../../environments/environment';

declare var Hammer: any;


@Component({
    selector: 'ion-keyboard',
    // element: 'ion-keyboard',
    templateUrl: 'keyboard.component.html',
    styleUrls: ['keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit, OnDestroy {
    @Output() buttonClick: EventEmitter<any> = new EventEmitter();
    @Output() leftActionClick: EventEmitter<any> = new EventEmitter();
    @Output() rightActionClick: EventEmitter<any> = new EventEmitter();
    @Output() numberClick: EventEmitter<any> = new EventEmitter();
    // @Output() onShow: EventEmitter<any> = new EventEmitter();
    // @Output() onHide: EventEmitter<any> = new EventEmitter();

    @HostBinding('class.visible') @Input() visible: boolean = true;
    @Input() roundButtons: boolean = false;
    @Input() showLetters: boolean = true;
    @Input() swipeToHide: boolean = true;
    @Input() resize: string = undefined; // @TODO: Implement content resizing

    public themes: string[] = [
        'light', 'dark', 'ionic', 'opaque-black', 'opaque-white',
        'dusk', 'nepal', 'chumaumenze', 'messenger'
    ];
    public animations: string[] = ['slide', 'pop']; // @TODO

    // private _swipeGesture: GestureContoller;
    private clickSub: any = new Subject();  // Observables
    private showSub: any = new Subject();  // Swipe gesture
    private hideSub: any = new Subject();
    private _isSwiping: boolean;
    private _width: string;

    public zoom: number = 1;
    private _align: string = 'center';
    private _animation: string = 'default'; // @TODO
    private _theme: string = 'ionic';
    private _leftActionOptions: ActionPrivateOptions = {visibility: 'hidden'};
    private _rightActionOptions: ActionPrivateOptions = {visibility: 'visible'};

    constructor(public el: ElementRef, public renderer: Renderer) {}

    get onClick() {
        return this.clickSub;
    }


    get onShow() {
        return this.showSub;
    }


    get onHide() {
        return this.hideSub;
    }


    get width() {
        return this._width;
    }

    @Input() set width(v: any) {
        const isPercent = String(v).indexOf('%') > -1;
        this._width = parseInt(v, 10) + (isPercent ? '%' : 'px');
    }


    get align() {
        return this._align;
    }

    @Input() set align(v: string) {
        if (['left', 'center', 'right'].indexOf(v) > -1) {
            this._align = v;
        } else {
            this.log(`Invalid [align] value "${v}".`, 'error');
        }
    }


    get animation() {
        return this._animation;
    }

    @Input() set animation(v: string) { // @TODO
        if (this.animations.indexOf(v) > -1) {
            this._animation = v;
        } else {
            this.log(`Invalid [animation] value "${v}".`, 'error');
        }
    }


    get theme() {
        return this._theme;
    }

    @Input() set theme(v: string) {
        if (this.themes.indexOf(v) > -1) {
            this._theme = v;
        } else {
            this.log(`Invalid [theme] value "${v}".`, 'error');
        }
    }


    @Input() set leftActionOptions(v: boolean | ActionOptions) {
        if (typeof v === 'object') {
            for (const opt in v) {
                if (opt === 'hidden') {
                    this._leftActionOptions.visibility = (v[opt] ? 'hidden' : 'visible');
                } else {
                    this._leftActionOptions[opt] = v[opt];
                }
            }
        }
        if (typeof v === 'boolean') {
            this._leftActionOptions.visibility = (v ? 'visible' : 'hidden');
            if (v === true) {
                this.log('Left action button is set to "true", an empty button is displayed.');
            }
        }
    }


    @Input() set rightActionOptions(v: boolean | ActionOptions) {
        if (typeof v === 'object') {
            for (const opt in v) {
                if (opt === 'hidden') {
                    this._rightActionOptions.visibility = (v[opt] ? 'hidden' : 'visible');
                } else {
                    this._rightActionOptions[opt] = v[opt];
                }
            }
        }
        if (typeof v === 'boolean') {
            this._rightActionOptions.visibility = (v ? 'visible' : 'hidden');
            if (v === true) {
                this.log('Right action button is set to "true", an empty button is displayed.');
            }
        }
    }

    get leftAction() {
        return this._leftActionOptions;
    }

    get rightAction() {
        return this._rightActionOptions;
    }

    ngOnInit() {
        this.adjustZoomLevel();
        // this.initSwipeGesture();
    }


    ngOnDestroy() {
        // @TODO unsubscribe and use clear() method
    }


    /**
     * Called when any keyboard button is clicked
     *
     * @param {any} event
     * @param {*} key
     *
     * @memberOf IonDigitKeyboard
     */
    public btnClick(event, key: any): void {
        // Prevent click on keyboard swip
        if (this.swipeToHide && this._isSwiping) {
            return;
        }

        this.buttonClick.emit(key);
        this.onClick.next(key);
        if (key === '*') {
            this.leftActionClick.emit();
        }
        if (key === '#') {
            this.rightActionClick.emit();
        }
        if (typeof key === 'number') {
            this.numberClick.emit(key);
        }
    }


    /**
     * Called on window resize.
     *
     */
    public onWindowResize(event): void {
        // @TODO resize content
        // .parentElement.parentElement.querySelector(this.resize);
        //     height: calc(100% - 287px);

        this.adjustZoomLevel();
    }


    /**
     * Call this method to show the keyboard.
     *
     * @public
     *
     * @memberOf IonDigitKeyboard
     */
    public show(callback: Function = () => {
    }): void {
        if (!this.visible) {
            this.visible = true;
            setTimeout(() => {
                    callback();
                    this.onShow.next();
                },
                this.getTransitionDuration(this.el.nativeElement));
        }
    }


    /**
     * Call this method to hide the keyboard.
     *
     * @public
     *
     * @memberOf IonDigitKeyboard
     */
    public hide(callback: Function = () => {
    }): void {
        if (this.visible) {
            this.visible = false;
            setTimeout(() => {
                callback();
                this.onHide.next();
            }, this.getTransitionDuration(this.el.nativeElement));
        }
    }


    /**
     * Call this to destroy the current keyboard element.
     * You can pass a callback to be called right after.
     * Does not destroy the component it-self (yet).
     *
     * @public
     * @param {Function} callback
     *
     * @memberOf IonDigitKeyboard
     */
    public destroy(callback: Function = (success: boolean) => {
    }): void {
        this.el.nativeElement.remove();
        callback(true);
    }


    /**
     * Adjust the keyboard zoom level.
     * Helps maintain proper visual.
     *
     * @private
     *
     * @memberOf IonDigitKeyboard
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
     * @memberOf IonDigitKeyboard
     */
    // private initSwipeGesture(): void {
    //     this._swipeGesture = new GestureContoller(this.el.nativeElement, {
    //         recognizers: [
    //             [Hammer.Swipe, {direction: Hammer.DIRECTION_VERTICAL}]
    //         ]
    //     });
    //     this._swipeGesture.listen();
    //     this._swipeGesture.on('swipedown', e => this.onSwipe(e));
    // }


    /**
     * Called when the user swipe the keyboard down.
     *
     * @param {Gesture} event
     *
     * @memberOf IonDigitKeyboard
     */
    // private onSwipe(event: GestureContoller): void {
    //     if (this.swipeToHide) {
    //         this._isSwiping = true;
    //         this.hide();
    //         setTimeout(() => this._isSwiping = false, event['deltaTime'] || 250);
    //     }
    // }


    /**
     * Log utility
     *
     * @private
     * @param {string} message
     * @param {string} [type='log | warning | error']
     *
     * @memberOf IonDigitKeyboard
     */
    private log(message: string, type: string = 'log'): void {
        if (console) {
            let c = '#3690CB';
            c = (type === 'error') ? '#e74c3c' : c;
            c = (type === 'warning') ? '#f39c12' : c;
            console.log('%c◼︎ IonDigitKeyboard%c: ' + message, 'font-weight: bold; color: ' + c + ';', '');
        }
    }


    /**
     * Return the transition duration of an HTMLElement if exists.
     *
     * @private
     * @param {HTMLElement} el
     * @returns {Number}
     *
     * @memberOf IonDigitKeyboard
     */
    private getTransitionDuration(el: HTMLElement): Number {
        const ms = window.getComputedStyle(el, null).getPropertyValue('transition-duration').split(',')[0];
        const multiplier = ms.indexOf('s') > -1 ? 1000 : 1;
        return parseFloat(ms) * multiplier;
    }
}

interface ActionPrivateOptions {
    visibility: string;
    fontSize?: string;
    iconName?: string;
    text?: string;
}

// Include Google Analytics
(() => {
    const GA_TRACKER_ID: string = environment.GA_TRACKER_ID;
    console.log(`Google Analytics ID: ${GA_TRACKER_ID}`);

    const t = document.createElement('script');
    t.type = 'text/javascript';
    t.innerText = `
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', '${GA_TRACKER_ID}', 'auto');  // Replace with your property ID.
    ga('send', 'pageview');`;
    const e = document.getElementsByTagName('script')[0];
    e.parentNode.insertBefore(t, e);
})();
