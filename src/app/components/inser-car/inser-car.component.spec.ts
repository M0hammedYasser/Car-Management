import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserCarComponent } from './inser-car.component';

describe('InserCarComponent', () => {
  let component: InserCarComponent;
  let fixture: ComponentFixture<InserCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InserCarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InserCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
