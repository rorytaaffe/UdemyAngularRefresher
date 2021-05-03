import { Component } from '@angular/core'; // imported from angular

// App Component Decorator
@Component({
  selector: 'app-root', // selector is your own HTML Tag to use this component, app-root will be used in the index.html page to reference this component <app-root></app-root>
  templateUrl: './app.component.html', // this is the URL key that points to the html file that contains the html code for this component
  styleUrls: ['./app.component.css'] // styling URL key, go into this page to change the styling, i.e colour 
})
export class AppComponent {
  //persons: string[] = ['Max', 'Manuel', 'Anna']; // if you add a : after persons it will allow you to set your own types, persons: string[] will change it to a string array
                                                 // persons: number[] would let you fill it up with an array of numbers
  onPersonCreated(name: string) {
    //this.persons.push(name); // this will push the entered name onto the array
  }
}                                                        
