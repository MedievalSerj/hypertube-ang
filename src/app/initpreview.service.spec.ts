import { TestBed, inject } from '@angular/core/testing';

import { InitpreviewService } from './initpreview.service';

describe('InitpreviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitpreviewService]
    });
  });

  it('should be created', inject([InitpreviewService], (service: InitpreviewService) => {
    expect(service).toBeTruthy();
  }));
});
