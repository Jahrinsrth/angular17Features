import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailOverviewComponent } from './product-detail-overview.component';

describe('ProductDetailOverviewComponent', () => {
  let component: ProductDetailOverviewComponent;
  let fixture: ComponentFixture<ProductDetailOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDetailOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
