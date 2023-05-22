import { Routes } from "@angular/router";
import { EventDetailComponent } from "./Events/event-detail.component";
import { EventListComponent } from "./Events/event-list.component";
//Ctr + space to Activate 
export  const appRoutes:Routes = [
    {path : "Events" , component : EventListComponent},
    {path : "Events/:id" , component : EventDetailComponent},
    {path : "" , redirectTo : "/Events" , pathMatch : "full"},
    
]