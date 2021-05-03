import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'}) // this allows us to inject sercives into other components, providedIn: 'root' makes sure that Angular is aware of this service

export class PersonsService {
    personsChanged = new Subject<string[]>(); // Subject is very similar to the Event Emitter we used before, the Subject will hold a string array <string[]>
    //private persons: string[] = ['Max', 'Manuel', 'Anna']; // private because we only want to be able to use it inside of this service
    //persons: string[] = ['Max', 'Manuel', 'Anna'];
    persons!: string[]; // clear the array and leave it undefined

    constructor(private http: HttpClient) {}

    fetchPersons() {  // copied the url from swapi.dev in the request bar, returns people names + info in Star Wars
        this.http
        .get<any>('https://swapi.dev/api/people/')
        .pipe(map(resData => {     // this map is different to .pipe(map), results.map() is just a map of elements, or an array, it's the normal JavaScript method
            return resData.results.map((character: { name: any; }) => character.name); // results is in the API and when look at the data in Developer Mode, the map(char...) will only return the name and remove everything else, size, race etc
        }))                                     // added : { name: any; }) to fix an error in compile
        .subscribe(transformedData => {
            //console.log(transformedData);
            this.personsChanged.next(transformedData);
        }); 
    }

    addPerson(name: string) {
        this.persons.push(name);
        //console.log(this.persons); // print out the array
        this.personsChanged.next(this.persons); // .next() will send the new value
    }

    removePerson(name: string) {
        this.persons = this.persons.filter(person => {
            return person !== name; // this will return true if the person passed through (name: string) is not found in the array we hard coded
        });
        //console.log(this.persons); // to see if it worked correctly
        this.personsChanged.next(this.persons);
    }
    
}