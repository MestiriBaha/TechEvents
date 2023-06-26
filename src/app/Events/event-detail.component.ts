import { Component, Input, OnInit } from '@angular/core';
import { EventServiceService } from '../shared/Services/event.service';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styles: []
})
export class EventDetailComponent implements OnInit{
    event : any  
  //put in Mind that declaring variables in ngOnInit is called " local" variables !! 
  constructor(private eventService : EventServiceService , private route : ActivatedRoute )
  {

  }
  GetBack()
  {
    console.log("done")
   }
ngOnInit(): void {
  //+ is for casting to integer type ! using ActivatedRoute we can have the currrent route ! 
  this.event = this.eventService.getEvent(+this.route.snapshot.params["id"]) ; 
}

}
