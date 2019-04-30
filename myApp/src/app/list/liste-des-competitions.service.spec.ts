import { TestBed } from '@angular/core/testing';

import { ListeDesCompetitionsService } from './liste-des-competitions.service';

describe('ListeDesCompetitionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListeDesCompetitionsService = TestBed.get(ListeDesCompetitionsService);
    expect(service).toBeTruthy();
  });
});
