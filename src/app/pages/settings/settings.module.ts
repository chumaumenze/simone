import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

import {SettingsPage} from '../settings/settings.page';

@NgModule({
    declarations: [
        SettingsPage
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        RouterModule.forChild([{path: '', component: SettingsPage}]),
        TranslateModule.forChild(),
    ],
    exports: [
        SettingsPage
    ],
    providers: []
})
export class SettingsPageModule {
}
