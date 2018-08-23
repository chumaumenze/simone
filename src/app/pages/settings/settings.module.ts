import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

import { SettingsPage } from '../';

@NgModule({
  declarations: [
    SettingsPage,
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SettingsPage }]),
    TranslateModule.forChild(),
  ],
  exports: [
    SettingsPage
  ]
})
export class SettingsPageModule { }
