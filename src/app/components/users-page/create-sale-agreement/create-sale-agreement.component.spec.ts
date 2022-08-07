import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSaleAgreementComponent } from './create-sale-agreement.component';

describe('CreateSaleAgreementComponent', () => {
  let component: CreateSaleAgreementComponent;
  let fixture: ComponentFixture<CreateSaleAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSaleAgreementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSaleAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
