import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { EventListComponent } from './Events/event-list.component';
import { EventCardComponent } from './Events/event-card.component';
import { HeaderComponent } from './shared/header.component';
import { FooterComponent } from './shared/footer.component';
import { EventServiceService } from './shared/Services/event.service';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { EventDetailComponent } from './Events/event-detail.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import {PanelModule} from 'primeng/panel' ; 

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventCardComponent,
    HeaderComponent,
    FooterComponent,
    EventDetailComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    PanelModule
  ],
  providers: [
    EventServiceService,
    provideToastr() ,
    provideAnimations()


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
