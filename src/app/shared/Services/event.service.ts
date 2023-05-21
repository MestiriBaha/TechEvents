import { Injectable } from '@angular/core';
import { events } from '../Data/Events';


@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  data = events ; 
  getEvents()
  {
    return events ; 
  }

  constructor() { }
}
