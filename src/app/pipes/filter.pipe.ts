import { Pipe, PipeTransform } from '@angular/core';
import {Guest} from "../guest/guest";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(guests: Guest[], search: string): Guest[] {
    if (!search.trim()) {
      return guests;
    }
    return guests.filter(guest => (guest.title.toLowerCase().includes(search.toLowerCase()) || guest.text.toLowerCase().includes(search.toLowerCase()) ));
  }

}
