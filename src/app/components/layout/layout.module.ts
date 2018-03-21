import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicLayoutComponent} from './basic-layout/basic-layout.component';
import {BrowserModule} from '@angular/platform-browser';
import {EvyntsModule} from '../evynts/evynts.module';
import {HomeModule} from '../home/home.module';
import {ProfileModule} from '../profile/profile.module';
import {NavComponent} from '../nav/nav.component';
import {AppRoutingModule} from '../../routing/app-routing-module';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    BasicLayoutComponent, NavComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    EvyntsModule,
    HomeModule,
    ProfileModule,
    NgbCollapseModule
  ]
})
export class LayoutModule {}
