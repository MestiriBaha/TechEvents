import { Component } from '@angular/core';
import { events } from '../Data/Events';


@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent {
   staticData = events ; 

   constructor()
   {
    
   }

}
