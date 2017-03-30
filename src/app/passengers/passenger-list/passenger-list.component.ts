import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Passenger } from './../passenger/passenger.model';
import { PassengersService } from './../passengers.service';


@Component({
  selector: 'passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.scss']
})
export class PassengerListComponent implements OnInit {
 passengers : Observable<Passenger []>;
  constructor(private service: PassengersService) { }

  ngOnInit() {
    this.passengers  = this.service.getPassengers();
  }

}
