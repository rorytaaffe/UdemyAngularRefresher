//import { Component, Output, EventEmitter} from '@angular/core';
import { Component} from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
    selector: 'app-person-input',
    templateUrl: './person-input.component.html',
    styleUrls: ['./person-input.component.css'] // [] means it takes an array of paths if you have more than one CSS file, this is only for CSS files
})

export class PersonInputComponent {
    //@Output() personCreate = new EventEmitter<string>(); // create new Eventemitter of type string, because we want to pass a name with the event

    enteredPersonName: string = ''; // adding a new property

    constructor(private personsService: PersonsService) {

    }

    onCreatePerson() {
        console.log('Created a person: ' + this.enteredPersonName); 
        //this.personCreate.emit(this.enteredPersonName); // passing enteredPersonName user input
        this.personsService.addPerson(this.enteredPersonName);
        this.enteredPersonName = ''; // Clears the input after printing, but the previous input will still stay shown on the console
    }
}