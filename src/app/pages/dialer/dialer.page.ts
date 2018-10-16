import {Component, OnInit, ViewChild} from '@angular/core';
import {AlertController, LoadingController, NavController} from '@ionic/angular';
import {IonicKeyboardOptions, KeyboardComponent} from '../../components';

@Component({
    selector: 'dialer',
    templateUrl: './dialer.html',
    styleUrls: ['./dialer.scss'],
})
export class DialerPage implements OnInit {

    @ViewChild(KeyboardComponent) keyboard;

    userInput: string = '';
    focus: string = '';

    public keyboardSettings: IonicKeyboardOptions = {
        align: 'center',
        width: '100%',
        visible: true,
        leftActionOptions: {
            iconName: 'ios-backspace',
            fontSize: '1.4em'
        },
        rightActionOptions: {
            iconName: 'ios-backspace',
            // text: '.',
            fontSize: '1.4em'
        },
        roundButtons: true,
        showLetters: true,
        swipeToHide: true,
        // Available themes: KeyboardComponent.themes
        theme: 'chumaumenze'
    };

    constructor(
        public navCtrl: NavController,
        public loader: LoadingController,
        public alerter: AlertController
    ) {
    }

    ngOnInit(): void {
        /**
         * Since we want to prevent native keyboard to show up, we put the disabled
         * attribute on the input, and manage focus programmaticaly.
         */
        this.keyboard.onClick.subscribe((key: any) => {
            const field = this.focus;
            if (['number', '*', '#'].includes(typeof key)) {
                this[field] += key;
            } else {
                if (key === 'backspace') {
                    this[field] = this[field].substring(0, this[field].length - 1);
                }
                if (key === 'dial' && this[field].toString().length > 0) {
                    this.performLogin();
                }
            }
        });

        // (BLur) Clear focus field name on keyboard hide
        this.keyboard.onHide.subscribe(() => {
            this.focus = '';
        });
    }

    public showKeyboard() {
        this.keyboard.show();
    }

    // Event way
    public numberClick(key: number) {
        console.log('From event: ', key);
    }

    public hideKeyboard() {
        this.keyboard.hide();
    }

    setFocus(field: string) {
        this.focus = field;
        this.keyboard.show();
    }

    async performLogin() {
        const loading = await this.loader.create({
            spinner: 'show',
            duration: 5000,
            content: 'Please wait...',
            //   translucent: true,
            //   cssClass: 'custom-class custom-loading',
            showBackdrop: true,
        });
        return await loading.present();
    }

}
