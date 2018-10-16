import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TabsPage} from './tabs.page';
import {DialerPage} from '../dialer/dialer.page';
import {USSDLogsPage} from '../ussd_logs/ussd_logs.page';
import {SettingsPage} from '../settings/settings.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'dialer',
                outlet: 'dialer',
                component: DialerPage
            },
            {
                path: 'logs',
                outlet: 'logs',
                component: USSDLogsPage
            },
            {
                path: 'settings',
                outlet: 'settings',
                component: SettingsPage
            }
        ]
    },
    {
        path: '',
        redirectTo: '/phone/tabs/(dialer:dialer)',
        // pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
