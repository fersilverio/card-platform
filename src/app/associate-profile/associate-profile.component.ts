import { Component } from '@angular/core';
import { AssociateResumeComponent } from '../shared/components/associate-resume/associate-resume.component';
import { AssociateDescriptionComponent } from '../shared/components/associate-description/associate-description.component';
import { AssociateCondecorationsComponent } from '../shared/components/associate-condecorations/associate-condecorations.component';
import { AssociateActionLogsComponent } from '../shared/components/associate-action-logs/associate-action-logs.component';
import { AssociateMatchesHistoryComponent } from '../shared/components/associate-matches-history/associate-matches-history.component';

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
