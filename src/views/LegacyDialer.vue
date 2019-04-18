<template lang="pug">
  ion-app#legacy-dialer
    sim-one-legacy-keyboard
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import SimOneLegacyKeyboard from "@/components/SimOneLegacyKeyboard.vue";

  @Component({
    components: {
      SimOneLegacyKeyboard,
    },
  })
  export default class LegacyDialer extends Vue {}
</script>

<style lang="scss" scoped>

</style>
