import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {USSDLogsPage} from './ussd_logs.page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: USSDLogsPage}])
    ],
    declarations: [USSDLogsPage]
})
export class USSDLogsPageModule {
}
