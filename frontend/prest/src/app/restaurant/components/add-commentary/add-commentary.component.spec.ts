import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommentaryComponent } from './add-commentary.component';

describe('AddCommentaryComponent', () => {
  let component: AddCommentaryComponent;
  let fixture: ComponentFixture<AddCommentaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCommentaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
