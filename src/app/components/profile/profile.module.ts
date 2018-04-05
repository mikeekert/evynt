import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import {FlyerModule} from "../flyer/flyer.module";
import {UserService} from "../../services/user.service";

@NgModule({
  imports: [
    CommonModule,
    FlyerModule
  ],
  declarations: [ProfileComponent],
  providers: [
    UserService
    ]
})
export class ProfileModule { }
