import { TestBed, inject } from '@angular/core/testing';

import { PassengersService } from './passengers.service';

describe('PassengersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PassengersService]
    });
  });

  it('should ...', inject([PassengersService], (service: PassengersService) => {
    expect(service).toBeTruthy();
  }));
});
