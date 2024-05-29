import { Routes } from '@angular/router';
import { AssociateProfileComponent } from './associate-profile/associate-profile.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'profile',
    component: AssociateProfileComponent,
    title: 'Associate Profile',
  }
];
