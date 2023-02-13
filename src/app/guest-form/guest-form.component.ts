import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Guest} from "../guest/guest";


@Component({
  selector: 'app-guest-form',
  templateUrl: './guest-form.component.html',
  styleUrls: ['./guest-form.component.scss']
})
export class GuestFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Guest> = new EventEmitter<Guest>()

  @ViewChild('inputGuest', {static: false}) inputRef: ElementRef;

  title = '';
  text = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  addGuest() {

    const guest: Guest = {
      title: this.title,
      text: this.text,
      id : Date.now()
    }

    this.onAdd.emit(guest);
    this.title = this.text = '';
    this.inputRef.nativeElement.focus();
  }


  focusTitle() {
    console.log(this.inputRef.nativeElement);
    this.inputRef.nativeElement.focus();
  }
}
