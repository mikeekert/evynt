import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from '../app.component';
import { FeedComponent } from '../feed/feed.component';

const routes: Routes = [
    {
        path: '',
        component: FeedComponent
        // evynts
        // evynt/id
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {}
