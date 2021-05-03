import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonsComponent } from './persons/persons.component';
import { PersonInputComponent } from './persons/person-input.component';

// routes is an array of JavaScript ojects, an array of routes
const routes: Routes = [
    { path: '', component: PersonsComponent }, // path is the path you want to load leave it '' for localhost:4200 , component defines what component you want to render
    { path: 'input', component: PersonInputComponent } // path: 'input' is technically localhost:4200/input , this component is PersonInputComponent
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], // imports allows us to import other modules, .forRoot lets us define the main route of our app, so we pass in our array of routes (routes)
    exports: [RouterModule] // we now export the above RouterModule because it has been configured, by passing in the array of routes
})

// Export our app routing module
export class AppRoutingModule {}