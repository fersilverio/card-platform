import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateCondecorationsComponent } from './associate-condecorations.component';

describe('AssociateCondecorationsComponent', () => {
  let component: AssociateCondecorationsComponent;
  let fixture: ComponentFixture<AssociateCondecorationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssociateCondecorationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssociateCondecorationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
