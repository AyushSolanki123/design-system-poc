import { TestBed } from '@angular/core/testing';

import { ReadCssVariablesService } from './read-css-variables.service';

describe('ReadCssVariablesService', () => {
  let service: ReadCssVariablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadCssVariablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
