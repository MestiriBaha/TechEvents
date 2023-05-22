import { Injectable } from '@angular/core';
import { events } from "C:/Users/LENOVO/Desktop/Event/EventManagement/src/app/Data/Events";


@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  /*data = events ; 
  getEvents()
  {
    return this.data ; 
  }*/
  getEvent(id : number)
  {
    return events.find(event => event.id===id)
  }

  constructor() { }
}
