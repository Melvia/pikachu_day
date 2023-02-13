import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import * as path from "path";
import {GuestsComponent} from "./app/guests/guests.component";
import {HomeComponent} from "./app/home/home.component";
import {AboutComponent} from "./app/about/about.component";
import {ErrorPageComponent} from "./app/error-page/error-page.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'guests', component: GuestsComponent },
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: '/error'}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
