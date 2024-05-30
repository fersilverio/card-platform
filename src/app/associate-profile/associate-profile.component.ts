import { Component } from '@angular/core';
import { AssociateResumeComponent } from '../associate-resume/associate-resume.component';
import { AssociateDescriptionComponent } from '../associate-description/associate-description.component';

@Component({
  selector: 'app-associate-profile',
  standalone: true,
  imports: [AssociateResumeComponent, AssociateDescriptionComponent],
  templateUrl: './associate-profile.component.html',
  styleUrl: './associate-profile.component.css'
})
export class AssociateProfileComponent {

}
