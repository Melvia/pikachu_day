import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GuestsComponent } from './guests/guests.component';
import { GuestComponent } from './guest/guest.component';
import { GuestFormComponent } from './guest-form/guest-form.component';
import {FormsModule} from "@angular/forms";
import { FilterPipe } from './pipes/filter.pipe';
import { IfnotDirective } from './directives/ifnot.directive';
import { LightDirective } from './directives/light.directive';
import {AppRoutingModule} from "../app.routing.module";
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';


@NgModule({
  declarations: [
    AppComponent,
    GuestsComponent,
    GuestComponent,
    GuestFormComponent,
    FilterPipe,
    IfnotDirective,
    LightDirective,
    AboutComponent,
    HomeComponent,
    ErrorPageComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
