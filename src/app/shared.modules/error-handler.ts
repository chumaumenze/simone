import {ErrorHandler, Inject} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';

import {environment} from '../../environments/environment';
import * as Raven from 'raven-js';


Raven
    .config(environment.SENTRY_DSN)
    .install();

export interface ParsedError {
    message: string;
    status?: number;
    stack?: string;
}

export class GlobalErrorHandler extends ErrorHandler implements ErrorHandler {
    private GA_TRACKER_ID: string = environment.GA_TRACKER_ID;

    constructor(
        @Inject(AlertController) private alerts: AlertController,
        @Inject(SplashScreen) public splashScreen: SplashScreen
    ) {
        super();
    }

    async handleError(error) {
        // Handle production environment error
        if (environment.production) {
            // Sentry error handler
            Raven.captureException(error.originalError || error);

            // Google Analytics error log handler
            const parsedError = this.parse(error);

            this.alerts.create({
                header: 'An Error Has Occurred',
                subHeader: 'Unfortunately, the app needs to be restarted',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Restart',
                        handler: () => {
                            this.splashScreen.show();
                            window.location.reload();
                        }
                    }
                ]
            }).then(value => value.present(), err => console.log('AlertError: ', err));
        }

        super.handleError(error);
    }

    parse(error: any): ParsedError {
        // get best available error message
        const parsedError: ParsedError = {
            message: error.message ? error.message as string : error.toString()
        };

        // include HTTP status code
        if (error.status != null) {
            parsedError.status = error.status;
        }

        // include stack trace
        if (error.stack != null) {
            parsedError.stack = error.stack;
        }

        return parsedError;
    }
}


// export class GlobalErrorHandle extends ErrorHandler { // implements ErrorHandler {
//   public ga: GoogleAnalytics;
//   // handleError(err: any): void {
//   //   Raven.captureException(err);
//   // }

//   handleError(err: any): void {
//     console.log('IonicError inside GlobalErrorHandler');
//     // Sentry error handler
//     Raven.captureException(err.originalError || err);
//     if (!environment.production) {
//       console.log(err);
//       super.handleError(err);
//     }

//     // unroll errors from promises
//     if (err.rejection) {
//       err = err.rejection;
//     }

//     const parsedError = this.parse(err);
//     this.ga.trackException(JSON.stringify(parsedError), false);
//   }
// }
