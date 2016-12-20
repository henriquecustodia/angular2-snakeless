/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SnakelessService } from './snakeless.service';

describe('SnakelessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnakelessService]
    });
  });

  it('should ...', inject([SnakelessService], (service: SnakelessService) => {
    expect(service).toBeTruthy();
  }));
});
