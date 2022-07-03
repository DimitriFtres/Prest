import { TestBed } from '@angular/core/testing';

import { NewsRestaurantService } from './news-restaurant.service';

describe('CommentaryService', () => {
  let service: NewsRestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsRestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
