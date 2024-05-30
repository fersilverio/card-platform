import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateDescriptionComponent } from './associate-description.component';

describe('AssociateDescriptionComponent', () => {
  let component: AssociateDescriptionComponent;
  let fixture: ComponentFixture<AssociateDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssociateDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssociateDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
