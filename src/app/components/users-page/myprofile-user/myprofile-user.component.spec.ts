import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprofileUserComponent } from './myprofile-user.component';

describe('MyprofileUserComponent', () => {
  let component: MyprofileUserComponent;
  let fixture: ComponentFixture<MyprofileUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyprofileUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyprofileUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
