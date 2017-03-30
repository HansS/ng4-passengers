import { Component, OnInit, OnDestroy,  Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PassengersService } from './../passengers.service';
import { Passenger } from './../passenger/passenger.model';

@Component({
  selector: 'passenger-count',
  templateUrl: './passenger-count.component.html',
  styleUrls: ['./passenger-count.component.scss']
})
export class PassengerCountComponent implements OnInit {

@Input() passengers: Passenger[];
subscription: any;
  constructor(private service: PassengersService) { }

  ngOnInit() {
  this.subscription =  this.service.getPassengers().subscribe(ps => this.passengers = ps);
}

checkedInCount(): number {
  if(!this.passengers) return;
  return this.passengers.filter((p:Passenger)  => p.checkedIn).length;
  //return this.passengers.length;
  //filter( p => p.name.startsWith('J'))
}
 ngOnDestroy() {
   //this.subscription.unsubscribe();
   //console.log('passenger-count unsubscribe');
   
   //Called once, before the instance is destroyed.
   //Add 'implements OnDestroy' to the class.
   
 }
}
