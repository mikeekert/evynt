import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';
import { NavComponent } from '../nav/nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../routing/app-routing-module';

@NgModule({
  declarations: [
    NavComponent,
    BasicLayoutComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ]
})
export class LayoutModule { }
