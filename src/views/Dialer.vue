<template lang="pug">
  ion-app.home
    ion-header
      ion-toolbar
        ion-title SimOne
    sim-one-keyboard(v-bind='keyboardSettings', @keyClick='handleInput($event)')
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SimOneKeyboard, { SimoneKeyboardOptions } from "@/components/SimOneKeyboard.vue"; // @ is an alias to /src

@Component({
  components: {
    SimOneKeyboard,
  },
})
export default class Dialer extends Vue {
  public keyboardSettings: SimoneKeyboardOptions = {
    align: "left",
    width: "100%",
    visible: true,
    roundButtons: true,
    showLetters: true,
    swipeToHide: true,
    theme: "chumaumenze",  // Available themes: KeyboardComponent.themes
    leftActionButton: {
      iconName: "ios-close",
      fontSize: "1.4em",
      visibility: "visible",
    },
    rightActionButton: {
      iconName: "ios-backspace",
      // text: ".",
      fontSize: "1.4em",
    },
  };

  public handleInput(message: string, event: any) {
    console.log("From event message: ", message);
    console.log("From event event: ", event);
  }
}
</script>

<style lang="scss" scoped>

</style>
