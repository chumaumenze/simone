import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

import { SignupPage } from '../';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SignupPage }]),
    TranslateModule.forChild(),
  ],
  exports: [
    SignupPage
  ],
})
export class SignupPageModule { }
