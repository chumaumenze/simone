<template lang="pug">
  ion-app#tab-view
    ion-tabs
      ion-tab(tab="dialer" label='Dialer')
        router-view(name='legacy-dialer')
      ion-tab(tab="logs" label='Logs')
        router-view(name='legacy-logs')
      ion-tab(tab="settings" label='Settings')
        router-view(name='legacy-settings')

      ion-tab-bar(slot='top' mode="md")
        ion-tab-button(tab='dialer' href="/legacy/dialer")
          ion-label Home
          ion-icon(name='call')
          ion-badge 6

        ion-tab-button(tab='logs' href="/legacy/logs")
          ion-label Logs
          ion-icon(name='time')

        ion-tab-button(tab='settings' href="/legacy/settings")
          ion-label Settings
          ion-icon(name='settings')
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component
  export default class TabView extends Vue {}
</script>

<style scoped>

</style>
