import { TestBed } from '@angular/core/testing';
import { GiohangService } from './giohang.service';

describe('GiohangService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiohangService = TestBed.get(GiohangService);
    expect(service).toBeTruthy();
  });
});