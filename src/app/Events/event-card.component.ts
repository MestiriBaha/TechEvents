import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { events } from '../Data/Events';
//import { EventServiceService } from 'C:/Users/LENOVO/Desktop/Event/EventManagement/src/app/shared/Services/event.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent  {
  constructor(private toastr: ToastrService)
   {
    //private eventService : EventServiceService
   }
   
   buttonClicked: boolean = false;
  staticData = events ; 
   ReadMore()
   {
    this.buttonClicked = true;
    console.log(this.buttonClicked)

   }
   
   


}
