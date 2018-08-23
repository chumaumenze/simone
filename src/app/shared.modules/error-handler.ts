import { ErrorHandler } from '@angular/core';
import { GoogleAnalytics } from '@ionic-native/google-analytics';



export interface ParsedError {
    message: string;
    status?: number;
    stack?: string;
  }


export class GlobalErrorHandler extends ErrorHandler {
    constructor(private ga: GoogleAnalytics) {
    super();
    }
    /**
     * @internal
     */
    handleError(err: any): void {
    super.handleError(err);
    try {
        const win: any = window;
        let monitor: any;

        monitor = win['IonicDevServer'];
        monitor && monitor.handleError && monitor.handleError(err);

        monitor = (win['Ionic'] = win['Ionic'] || {}).Monitor;
        monitor && monitor.handleError && monitor.handleError(err);
    } catch (e) {}

    // unroll errors from promises
    if (err.rejection) {
        err = err.rejection;
    }

    const parsedError = this.parse(err);
    this.ga.trackException(JSON.stringify(parsedError), false);
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
