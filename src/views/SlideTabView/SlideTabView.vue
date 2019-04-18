<template lang="pug">
  #slide-tab-view
    ion-searchbar

    // ion-slides
      ion-slide
        h1 Slide 1
        router-link(:to="{name: 'dialer'}") key
        router-view(name="dialer")
      ion-slide
        h1 Slide 2
        router-view(name="profile")
      ion-slide
        h1 Slide 3
        router-view(name="profile")

    ion-toolbar(mode='md')
      ion-segment(:color='tabsColor', v-model='selectedTabIndex', mode='md')
        ion-segment-button(v-for='(tab, key) in tabs', :key="key", :value='key', @ionSelect='onTabSelect(key, $event)')
          ion-icon(v-if='tab.icon', :name='tab.icon')
          | {{tab.title}}

      //.slide(#slide='', [style.left]='slidePosition', [class.ease]='shouldSlideEase', [style.width]='slideWidth')

    ion-slides(:style.height="'100px'", :initialslide='selectedTabIndex', @ionSlideDrag='onDrag($event)',
                @ionSlideWillChange='onSlideWillChange', @ionSlideDidChange='onSlideDidChange(selectedTabIndex, $event)')
      ion-slide(v-for='(tab, key) in tabs', :key="key")
        ion-nav(:root='tab.tabRoot', :rootparams='tab.navParams')
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import Dialer from "@/views/Dialer.vue";


  @Component
  export default class SlideTabView extends Vue {
    private tabsColor?: string = "primary";
    private selectedTabIndex?: number = 0;
    private slidesHeight?: number = 100;

    private tabs = [
      {
        title: "Dialer",
        tabRoot: Dialer,
        navParams: {},
      },
    ];

    private onSlideWillChange(event: any) {
      return;
    }

    private onSlideDidChange(key: number, event: any) {
      return;
    }

    private onTabSelect(key: number, event: any) {
      return;
    }
  }
</script>

<style lang="scss" scoped>

</style>
