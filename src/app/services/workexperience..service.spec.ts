import { WorkExperienceService } from './workexperience.service';
import { TestBed } from '@angular/core/testing';


describe('WorkExperienceService', () => {
  let service: WorkExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkExperienceService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
