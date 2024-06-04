import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateRegistryComponent } from './associate-registry.component';

describe('AssociateRegistryComponent', () => {
  let component: AssociateRegistryComponent;
  let fixture: ComponentFixture<AssociateRegistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssociateRegistryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssociateRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
