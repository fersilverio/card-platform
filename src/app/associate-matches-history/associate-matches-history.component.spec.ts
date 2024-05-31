import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateMatchesHistoryComponent } from './associate-matches-history.component';

describe('AssociateMatchesHistoryComponent', () => {
  let component: AssociateMatchesHistoryComponent;
  let fixture: ComponentFixture<AssociateMatchesHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssociateMatchesHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssociateMatchesHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
