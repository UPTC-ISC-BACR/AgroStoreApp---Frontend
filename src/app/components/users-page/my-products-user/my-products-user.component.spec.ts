import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProductsUserComponent } from './my-products-user.component';

describe('MyProductsUserComponent', () => {
  let component: MyProductsUserComponent;
  let fixture: ComponentFixture<MyProductsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProductsUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyProductsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
