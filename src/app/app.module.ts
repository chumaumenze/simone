import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule, Storage } from '@ionic/storage';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { GlobalErrorHandler } from './shared.modules';
import { Settings, User } from './providers';

import { AppComponent } from './app.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AlertComponent } from './components/alert/alert.component';
import { ToastComponent } from './components/toast/toast.component';


// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

// {
//   tabsPlacement: 'top',
//   platforms: {
//     ios: {
//       tabsPlacement: 'bottom',
//     }
//   }
// }
@NgModule({
  declarations: [AppComponent, LoaderComponent, AlertComponent, ToastComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicStorageModule.forRoot()
  ],
  exports: [
    TranslateModule,
  ],
  providers: [
    User,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    // {provide: ErrorHandler, useClass: GlobalErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
