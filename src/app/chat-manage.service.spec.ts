import { TestBed } from '@angular/core/testing';

import { ChatManageService } from './chat-manage.service';

describe('ChatManageService', () => {
  let service: ChatManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
