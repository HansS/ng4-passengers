import { getTestBed } from '@angular/core/testing';
import { Passenger } from './passenger/passenger.model';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class PassengersService {

jsonFile = '../../assets/passengers';
baseUrl = 'http://localhost:3000/passengers';

  constructor(private http: Http) { }

  getPassengers(): Observable<Passenger[]> {
    return this.http.get(this.baseUrl)
      .do(console.log)
      .map((res) => res.json());
  }

  getPassenger(id:number): Observable<Passenger> {
    return this.http.get(this.baseUrl + `/${id}`)
      .do(console.log)
      .map((res) => res.json().passengers[0]);
    } // getPassenger
} // class
