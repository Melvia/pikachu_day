import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Guest} from "./guest";

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit, OnChanges {

  @Output() onRemove: EventEmitter<number> = new EventEmitter<number>()

  @Input() guest: Guest

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  removeGuest() {
    this.onRemove.emit(this.guest.id);
  }


}
