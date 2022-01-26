import { TestBed } from '@angular/core/testing';

import { FavoriteslistService } from './favoriteslist.service';

describe('FavoriteslistService', () => {
  let service: FavoriteslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
