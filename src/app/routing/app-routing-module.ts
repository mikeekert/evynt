import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../services/auth-guard.service';

import {AppComponent} from '../app.component';
import {EvyntsComponent} from '../components/evynts/evynts.component';
import {ProfileComponent} from '../components/profile/profile.component';
import {HomeComponent} from '../components/home/home.component';
import { BasicLayoutComponent } from '../components/layout/basic-layout/basic-layout.component';

const routes: Routes = [
    { path: '**', redirectTo: '/welcome', pathMatch: 'full' },
    {
        path: '', component: BasicLayoutComponent,
        children: [
            {
                path: 'welcome',
                component: HomeComponent,
                canActivate: [AuthGuardService]
            }, {
                path: 'evynts',
                component: EvyntsComponent,
                canActivate: [AuthGuardService]
            }, {
                path: 'evynt/:id',
                component: ProfileComponent,
                canActivate: [AuthGuardService]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {}
