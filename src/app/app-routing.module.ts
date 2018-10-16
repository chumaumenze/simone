import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: '', loadChildren: './pages/home/home.module#HomePageModule'},
    {path: 'phone', loadChildren: './pages/tabs/tabs.module#TabsPageModule'},
    // { path: 'dialer', loadChildren: './pages/dialer/dialer.module#DialerPageModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {enableTracing: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
