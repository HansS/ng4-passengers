import { PassengersService } from './passengers.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { passengersRoutes } from './passengers.routes';
import { PassengersComponent } from './passengers.component';
import { PassengerComponent } from './passenger/passenger.component';
import { PassengerFormComponent } from './passenger-form/passenger-form.component';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import { PassengerListComponent } from './passenger-list/passenger-list.component';
import { PassengerCountComponent } from './passenger-count/passenger-count.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(passengersRoutes)
  ],
  declarations: [PassengersComponent, 
                        PassengerComponent, 
                        PassengerFormComponent,
                        PassengerDetailsComponent, 
                        PassengerListComponent,
                        PassengerCountComponent],
  exports: [RouterModule, PassengersComponent],
  providers: [PassengersService]
})
export class PassengersModule { }
