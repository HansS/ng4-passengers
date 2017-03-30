import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import { PassengerListComponent } from './passenger-list/passenger-list.component';
import { PassengersComponent } from './passengers.component';
import { Routes } from '@angular/router';

export const passengersRoutes: Routes = [
  {path: 'passengers', component: PassengersComponent,
  children: [
    {path: 'list', component: PassengerListComponent},
    {path: ':id', component: PassengerDetailsComponent},
  ]
}
];


