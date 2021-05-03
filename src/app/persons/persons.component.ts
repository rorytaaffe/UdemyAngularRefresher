//import {Component, Input} from '@angular/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonsService } from './persons.service';

@Component({
 selector: 'app-persons',
 templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit, OnDestroy{  // implements is basically a contract your class signs that forces your class to implement a certain functionality
    //@Input() personList!: string[]; // Adding a new property to my persons component, we already know that the other component's property is an array of strings
                                    // ! after personList is needed for an error, when id do string[] = []; it prints out a blank list
    
    personList!: string[];
    //private personService: PersonsService;

    isFetching = false; // boolean

    private personListSubs!: Subscription; // new property added in the component , ! needed for error

    constructor(private prsService: PersonsService) {  // we can put PersonsServie as an argument because it is now injectabl, as seen with @Injectable in persons.service.ts
        //this.personList = prsService.persons; // prsService is an instance variable for PersonsService, .persons is the name of the array of strings in persons.service.ts, 
                                              // assigning this to personList
        //this.personService = prsService;
    }     
    
    ngOnInit() {
        //this.personList = this.prsService.persons;                                    // what is returned from .subscribe() is stored in the personListSubs property
        this.personListSubs = this.prsService.personsChanged.subscribe(persons => {   // .subscribe() when we want to listen or accept new values => {} will excecute whenever a new value is emitted
            this.personList = persons;
            this.isFetching = false;
        }); 
        this.isFetching = true;
        this.prsService.fetchPersons();
    }

    onRemovePerson(personName: string) {
        this.prsService.removePerson(personName); // reach out to my Person Service prsService , call removePerson and forward that personName
    }

    ngOnDestroy() {
        this.personListSubs.unsubscribe(); // because .subscribe is stored in personListSubs, we can now call the .unsubscribe() to unsubscribe to prevent memory leaks
    }

}                                   