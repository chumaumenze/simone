import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {TabsPageRoutingModule} from './tabs.routing.module';

import {TabsPage} from './tabs.page';
import {SettingsPageModule} from './../settings/settings.module';
import {USSDLogsPageModule} from './../ussd_logs/ussd_logs.module';
import {DialerPageModule} from '../dialer/dialer.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        TabsPageRoutingModule,
        DialerPageModule,
        USSDLogsPageModule,
        SettingsPageModule,
        RouterModule.forChild([{path: '', component: TabsPage}])
    ],
    declarations: [TabsPage]
})
export class TabsPageModule {
}
