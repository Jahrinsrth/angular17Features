import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailContactComponent } from './product-detail-contact.component';

describe('ProductDetailContactComponent', () => {
  let component: ProductDetailContactComponent;
  let fixture: ComponentFixture<ProductDetailContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDetailContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
