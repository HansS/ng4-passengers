import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { PassengersService } from './../passengers.service';
import { Passenger } from './../passenger/passenger.model';

@Component({
  selector: 'passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.scss']
})
export class PassengerDetailsComponent implements OnInit {

  @Input() passenger: Passenger;
  subscription: any;
  id: number;
  constructor(private route: ActivatedRoute, private service: PassengersService) { }

  ngOnInit() {

  }

} // class
