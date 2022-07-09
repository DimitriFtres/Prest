import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyUserInformationsComponent } from './modify-user-informations.component';

describe('ModifyUserInformationsComponent', () => {
  let component: ModifyUserInformationsComponent;
  let fixture: ComponentFixture<ModifyUserInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyUserInformationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyUserInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
