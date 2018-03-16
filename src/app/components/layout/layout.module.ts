import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../routing/app-routing-module';
import { EvyntsModule } from '../evynts/evynts.module';
import { HomeModule } from '../home/home.module';
import { ProfileModule } from '../profile/profile.module';
import { NavModule } from '../nav/nav.module';

@NgModule({
  declarations: [
    BasicLayoutComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NavModule,
    EvyntsModule,
    HomeModule,
    ProfileModule,
  ]
})
export class LayoutModule { }
