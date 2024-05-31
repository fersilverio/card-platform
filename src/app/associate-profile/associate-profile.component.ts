import { Component } from '@angular/core';
import { AssociateResumeComponent } from '../associate-resume/associate-resume.component';
import { AssociateDescriptionComponent } from '../associate-description/associate-description.component';
import { AssociateCondecorationsComponent } from '../associate-condecorations/associate-condecorations.component';
import { AssociateActionLogsComponent } from '../associate-action-logs/associate-action-logs.component';
import { AssociateMatchesHistoryComponent } from '../associate-matches-history/associate-matches-history.component';

@Component({
  selector: 'app-associate-profile',
  standalone: true,
  imports: [
    AssociateResumeComponent,
    AssociateDescriptionComponent,
    AssociateCondecorationsComponent,
    AssociateActionLogsComponent,
    AssociateMatchesHistoryComponent,
  ],
  templateUrl: './associate-profile.component.html',
  styleUrl: './associate-profile.component.css'
})
export class AssociateProfileComponent {

}
