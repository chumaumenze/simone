import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { tap, delay, share } from 'rxjs/operators';

import { Api } from '../providers/api/api';


@Injectable()
export class AuthService {
  isLoggedIn = false;

  // TODO: still not sure what seq is but just adding it
  seq: ArrayBuffer | null;

  // Base authentication url
  baseUrl = 'https://httpbin.org/basic-auth';

  // store the URL so we can redirect after logging in
  redirectUrl: string = '/home';

  constructor (public api: Api) {}

   /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  signup(accountInfo: any) {
    const url: string = `${this.baseUrl}/username/password`;
    const seq = this.api.post(url, accountInfo).pipe(share());

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status === 'success') {
        this.isLoggedIn = true;
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq.pipe(
      // delay(1000),
      tap(value => this.seq = value)
    );
  }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  login(accountInfo: any) {
    const url: string = `${this.baseUrl}/username/password`;
    const seq = this.api.post(url, accountInfo).pipe(share());

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status === 'success') {
        this.isLoggedIn = true;
      } else {
        console.log('Failed Login: ', res);
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq.pipe(
      // delay(1000),
      tap(value => this.seq = value)
    );
  }

  /**
   * Log the user out, which forgets the session
   */
  logout(): void {
    this.seq = null;
    this.isLoggedIn = false;
  }
}
