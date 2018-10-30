import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {NavController, ToastController} from '@ionic/angular';

import {User} from '../../providers';

// import { Api } from './../../providers/api/api';

@Component({
    selector: 'homepage',
    templateUrl: 'home.html',
    styleUrls: ['home.scss']
})
export class HomePage {
    // The account fields for the login form.
    // If you're using the username field with or without email, make
    // sure to add it to the type
    account: { name: string, email: string, password: string } = {
        name: 'Test Human',
        email: 'test@example.com',
        password: 'test'
    };

    // Our translated text strings
    private loginErrorString: string;

    // Our translated text strings
    private signupErrorString: string;

    constructor(public navCtrl: NavController,
                public router: Router,
                public user: User,
                public toastCtrl: ToastController,
                public translateService: TranslateService) {

        this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
            this.signupErrorString = value;
        });

        this.translateService.get('LOGIN_ERROR').subscribe((value) => {
            this.loginErrorString = value;
        });
    }

    doSignup() {
        // Attempt to signup through our User service
        try {
            this.user.signup(this.account).go_home();
        } catch (error) {
            // Unable to sign up
            this.toastCtrl.create({
                message: this.signupErrorString,
                duration: 3000,
                position: 'top'
            }).then(toast => toast.present());
        }
    }

    doLogin() {
        // Attempt to login in through our User service
        try {
            this.user.login(this.account).go_home();
        } catch (error) {
            // Unable to sign up
            this.toastCtrl.create({
                message: this.loginErrorString,
                duration: 3000,
                position: 'top'
            }).then(toast => toast.present());
        }
    }
}
