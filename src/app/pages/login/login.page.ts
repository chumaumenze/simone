import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NavController, ToastController } from '@ionic/angular';

import { User } from '../../providers';
import { DialerPage } from '../';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(
    public router: Router,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    });
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
