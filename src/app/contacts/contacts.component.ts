import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  @Output() notify: EventEmitter<any> = new EventEmitter<any>();

  users = [
    {name: 'Ross',Address:"strawberry Road,golden house" ,city: 'New York', phone: '+1 232 144 3456'},
    {name: 'Joe', Address:"Choclate Road,milky lane",city: 'London', phone: '+1 232 144 7656'},
    {name: 'Chandler',Address:"vampire villa Road,silver house" ,city: 'Singapore', phone: '+1 232 224 7906'},
    {name: 'Monica',Address:"silver city, bluemoon Road", city: 'New York', phone: '+1 200 144 7656'},
    {name: 'Pheobe',Address:"DisneyLand, Rosewood Villa", city: 'London', phone: '+1 232 776 7656'},
  ]

  onclick(value) {
    this.notify.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
