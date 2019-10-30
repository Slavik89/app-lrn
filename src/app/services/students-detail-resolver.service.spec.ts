import { TestBed } from '@angular/core/testing';

import { StudentsDetailResolverService } from './students-detail-resolver.service';

describe('StudentsDetailResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentsDetailResolverService = TestBed.get(StudentsDetailResolverService);
    expect(service).toBeTruthy();
  });
});
