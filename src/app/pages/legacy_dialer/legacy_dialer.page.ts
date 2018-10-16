import {Component} from '@angular/core';
import {AlertController, LoadingController, NavController} from '@ionic/angular';
import * as $ from 'jquery';

@Component({
    selector: 'app-dialer',
    templateUrl: 'dialer.page.html',
    styleUrls: ['dialer.page.scss']
})
export class DialerPage {
    constructor(public navCtrl: NavController, public loader: LoadingController,
                public alerter: AlertController) {
    }

    async presentLoading() {
        const loading = await this.loader.create({
            content: 'Please wait...',
            duration: 2000
        });
        return await loading.present();
    }

    async presentLoadingWithOptions() {
        const loading = await this.loader.create({
            spinner: 'hide',
            duration: 5000,
            content: 'Please wait...',
            translucent: true,
            cssClass: 'custom-class custom-loading',
            showBackdrop: true,
        });
        return await loading.present();
    }
}

$(document).ready(function () {

    /*	Delete */
    $('.backspace').click(function () {
        const numbers = $('.digits-display').text();
        const numbers2 = $('.digits-display').text().length;
        $('.digits-display').text(numbers.substr(0, numbers2 - 1));
    });


    // Event Handler
    function eventHandler(event) {
        // console.log(event);
        const digitsCount = $('.digits-display').text().length;
        const character = event.currentTarget.children[0].firstChild.data;
        if (digitsCount < 18) {
            $('.digits-display').append(`${character}`);
        }
    }

    /*	Display	*/
    for (let digit = 0; digit <= 9; digit++) {
        $(`.pushed${digit}`).click(event, eventHandler);
    }
    $('.pushedstar, .pushedpound').click(event, eventHandler);

});
