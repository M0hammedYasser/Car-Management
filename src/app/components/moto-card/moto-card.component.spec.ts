import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoCardComponent } from './moto-card.component';

describe('MotoCardComponent', () => {
  let component: MotoCardComponent;
  let fixture: ComponentFixture<MotoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotoCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
