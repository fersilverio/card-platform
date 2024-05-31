import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateActionLogsComponent } from './associate-action-logs.component';

describe('AssociateActionLogsComponent', () => {
  let component: AssociateActionLogsComponent;
  let fixture: ComponentFixture<AssociateActionLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssociateActionLogsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssociateActionLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
