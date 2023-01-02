import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomUsersComponent } from './random-users.component';

describe('RandomUsersComponent', () => {
  let component: RandomUsersComponent;
  let fixture: ComponentFixture<RandomUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
