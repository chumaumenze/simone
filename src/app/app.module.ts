import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { USSDSimulator } from './app.component';

import { LogsPage } from '../pages/logs/call_logs';
import { ContactsPage } from '../pages/contact/contacts';
import { DialerPage } from '../pages/dialer/dialer';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    USSDSimulator,
    LogsPage,
    ContactsPage,
    DialerPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(USSDSimulator, {
      tabsPlacement: 'top'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    USSDSimulator,
    LogsPage,
    ContactsPage,
    DialerPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
