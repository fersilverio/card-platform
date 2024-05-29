import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateProfileComponent } from './associate-profile.component';

describe('AssociateProfileComponent', () => {
  let component: AssociateProfileComponent;
  let fixture: ComponentFixture<AssociateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssociateProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssociateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
