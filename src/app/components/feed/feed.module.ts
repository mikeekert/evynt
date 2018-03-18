import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FeedDetailsComponent} from './feed-details/feed-details.component';
import {FeedUserComponent} from './feed-user/feed-user.component';
import {FeedDescriptionComponent} from './feed-description/feed-description.component';
import {FeedComponent} from './feed.component';
import {RecentComponent} from './recent/recent.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
    FeedComponent,
    FeedDetailsComponent,
    FeedUserComponent,
    FeedDescriptionComponent,
    RecentComponent
  ],
  exports: [
    FeedComponent,
    FeedDetailsComponent,
    FeedUserComponent,
    FeedDescriptionComponent,
    RecentComponent
  ]
})
export class FeedModule {
}
