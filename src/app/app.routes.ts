import { Routes } from '@angular/router';
import { AssociateProfileComponent } from './associate-profile/associate-profile.component';
import { HomeComponent } from './home/home.component';
import { AssociateRegistryComponent } from './associate-registry/associate-registry.component';
import { AssociateLoginComponent } from './associate-login/associate-login.component';

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
  },
  {
    path: 'register',
    component: AssociateRegistryComponent,
    title: 'Associate Registry',
  },
  {
    path: 'login',
    component: AssociateLoginComponent,
    title: 'Associate Login',
  }
];
