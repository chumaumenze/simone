import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

import {HomePage} from '../home/home.page';
import {User} from '../../providers';
import {Api} from './../../providers/api/api';
import {AuthGuard} from './../../shared.modules/nav-guard';
import {AuthService} from './../../shared.modules/authentication';

@NgModule({
    declarations: [
        HomePage,
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: HomePage}]),
        TranslateModule.forChild(),
    ],
    exports: [
        HomePage
    ],
    providers: [
        User, Api,
        AuthGuard, AuthService
    ]
})
export class HomePageModule {
}
