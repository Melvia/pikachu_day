import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(protected router: Router) { }

  ngOnInit(): void {

  }

  goToGuestsPage() {
    this.router.navigate(['/guests'])
  }

}
