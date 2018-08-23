import { share } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

// import request = require('request');

import { AuthService } from '../../shared.modules';
import { Api } from '../api/api';


// Set our navigation extras object
// that passes on our global query params and fragment
const navExtras: NavigationExtras = {
  queryParamsHandling: 'preserve',
  preserveFragment: true
};

/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
@Injectable()
export class User {
  _user: any;

  constructor(public api: Api, public auth: AuthService, public router: Router) { }
  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  login(accountInfo: any) {
    this.auth.login(accountInfo);
    return this;
  }

  /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  signup(accountInfo: any) {
    this.auth.signup(accountInfo);
    return this;
  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this._user = null;
    return this.auth.logout();
  }

  isLoggedIn() {
    return this.auth.isLoggedIn;
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    this._user = resp.user;
  }

  go_home() {
    if (this.isLoggedIn()) {
      // Get the redirect URL from our auth service
      // If no redirect has been set, use the default
      const redirect = this.auth.redirectUrl;

      // Redirect the user
      this.router.navigate([redirect], navExtras);
    }
  }
}
