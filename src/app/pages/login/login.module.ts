import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

import { LoginPage } from '../';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: LoginPage }]),
    TranslateModule.forChild(),
  ],
  exports: [
    LoginPage
  ],
  // providers: [
  //   {provide: PLATFORM_PIPES, useValue: TranslatePipe, multi: true}
  // ]
})
export class LoginPageModule { }
