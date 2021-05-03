import { NgModule } from '@angular/core'; // imported from angular
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component'; // means we're importing it from app.component.ts
import { PersonInputComponent } from './persons/person-input.component';

import { PersonsComponent } from './persons/persons.component'; // PersonsComponent is the class name we export at the end of the new persons component we made
import { AppRoutingModule } from './app-routing.module';


// ngModule is the basic Module needed to run the App
@NgModule({
  declarations: [AppComponent,PersonsComponent, PersonInputComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } // this means we export a class, and the Module/ Component Decorator above is added to it
