import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProductComponent } from './main-product.component';

describe('MainProductComponent', () => {
  let component: MainProductComponent;
  let fixture: ComponentFixture<MainProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
