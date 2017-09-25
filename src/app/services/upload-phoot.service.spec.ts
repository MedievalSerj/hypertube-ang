import { TestBed, inject } from '@angular/core/testing';

import { UploadPhootService } from './upload-phoot.service';

describe('UploadPhootService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadPhootService]
    });
  });

  it('should be created', inject([UploadPhootService], (service: UploadPhootService) => {
    expect(service).toBeTruthy();
  }));
});
