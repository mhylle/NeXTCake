/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import {CakeService} from "./cake.service";


describe('CakeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CakeService]
    });
  });

  it('should ...', inject([CakeService], (service: CakeService) => {
    expect(service).toBeTruthy();
  }));
});
