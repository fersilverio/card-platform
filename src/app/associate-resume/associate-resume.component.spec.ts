import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateResumeComponent } from './associate-resume.component';

describe('AssociateResumeComponent', () => {
  let component: AssociateResumeComponent;
  let fixture: ComponentFixture<AssociateResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssociateResumeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssociateResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
