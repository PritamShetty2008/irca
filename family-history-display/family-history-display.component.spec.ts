import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyHistoryDisplayComponent } from './family-history-display.component';

describe('FamilyHistoryDisplayComponent', () => {
  let component: FamilyHistoryDisplayComponent;
  let fixture: ComponentFixture<FamilyHistoryDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FamilyHistoryDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FamilyHistoryDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
