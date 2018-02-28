import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from '../app.component';
import {FeedComponent} from '../components/feed/feed.component';
import {EvyntsComponent} from '../components/evynts/evynts.component';
import { ProfileComponent } from '../components/profile/profile.component';

const routes: Routes = [
    {
        path: '',
        component: FeedComponent
    }, {
        path: 'evynts',
        component: EvyntsComponent
    }, {
        path: 'evynt/:id',
        component: ProfileComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {}
