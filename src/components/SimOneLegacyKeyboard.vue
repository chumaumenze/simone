<template lang="pug">
  ion-content.dialer-contents
    ion-grid.dialer
      ion-row.dialer-logs
      ion-row.display
        ion-col(size='10')
          span.digits-display
        ion-col.backspace(col-2='')
          ion-icon(name='backspace')
      ion-row
        ion-col.pushed1
          span
            | 1
            ion-icon.key-icon(name='recording')
        ion-col.pushed2
          span
            | 2
            em ABC
        ion-col.pushed3
          span
            | 3
            em DEF
      ion-row
        ion-col.pushed4
          span
            | 4
            em GHI
        ion-col.pushed5
          span
            | 5
            em JKL
        ion-col.pushed6
          span
            | 6
            em MNO
      ion-row
        ion-col.pushed7
          span
            | 7
            em PQRS
        ion-col.pushed8
          span
            | 8
            em TUV
        ion-col.pushed9
          span
            | 9
            em WXYZ
      ion-row
        ion-col.pushedstar
          span
            | *
            ion-icon.key-icon(name='copy')
        ion-col.pushed0
          span
            | 0
            em +
        ion-col.pushedpound
          span
            | #
            em , ;
      ion-row.dialer
        ion-col.dial(@click='presentLoading')
          ion-icon.call(name='call')
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component
  export default class SimOneLegacyKeyboard extends Vue {
    async presentLoading() {
      const loading = await this.$ionic.loadingController.create({
        message: "Please wait...",
        duration: 2000,
      });
      return await loading.present();
    }

    async presentLoadingWithOptions() {
      const loading = await this.$ionic.loadingController.create({
        spinner: "bubbles",
        duration: 5000,
        message: "Please wait...",
        translucent: true,
        animated: true,
        // cssClass: 'custom-class custom-loading',
        showBackdrop: true,
      });
      return await loading.present();
    }
  }
</script>

<style lang="scss" scoped>
  ion-content {
    background: black;
    ion-grid {
      background: #3f3f3f url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAKElEQVQIW2NkQAOO07anMSKLgQT2Z3nOggvCBECKwILIAmBBdAGQIABJuxH63EphJgAAAABJRU5ErkJggg==) repeat;
      height: 100%;

      ion-row.dialer {
        background-color: var(--ion-color-success, #0ec254);
        margin-top: 15%;
      }

      ion-row.dialer-logs {
        height: 33.33%;
      }

      ion-row.display {
        background-color: unset;
        height: 12%;
      // overflow: hidden;
      // white-space: nowrap;
      // direction: rtl;
      }

      ion-row.display:active {
        background-color: unset;
      }

      ion-row {

        ion-col.backspace {
          cursor: pointer;

          ion-icon {
            font-size: 200%;
            float: right;
            margin-right: 15px;
          }
        }

        ion-col {
          align-self: center;
          text-align: center;

          ion-icon {
            color: #fff
          }

          ion-icon.call {
            font-size: 300%;
          }

          ion-icon.key-icon {
            font-size: 60%;
            position: absolute;
          }

          span.digits-display {
            float: left;
            direction: ltr;
            unicode-bidi: isolate;
          // overflow: hidden;
            text-indent: unset;
            right: unset;
          }

          span {
            font-size: 30px;
            text-indent: -10%;
            position: relative;
            cursor: pointer;
            right: 13%;

            em {
              font-size: 12px;
              color: #fff;
              font-style: normal;
              position: absolute;
            }
          }

        // span:active {
        //   background: rgba(104, 208, 249, .4);
        // }
        }

        ion-col:active {
          background: rgba(104, 208, 249, .4);
        }
      }
    }
  }
</style>
