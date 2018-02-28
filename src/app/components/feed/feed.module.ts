import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FeedDetailsComponent} from './feed-details/feed-details.component';
import {FeedUserComponent} from './feed-user/feed-user.component';
import {FeedDescriptionComponent} from './feed-description/feed-description.component';
import {FeedComponent} from './feed.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FeedComponent, FeedDetailsComponent, FeedUserComponent, FeedDescriptionComponent
  ],
  exports: [FeedComponent, FeedDetailsComponent, FeedUserComponent, FeedDescriptionComponent]
})
export class FeedModule {}
