import { Routes } from '@angular/router';
import { AssociateProfileComponent } from './associate-profile/associate-profile.component';
import { HomeComponent } from './home/home.component';
import { AssociateRegistryComponent } from './associate-registry/associate-registry.component';
import { AssociateLoginComponent } from './associate-login/associate-login.component';
import { authGuard } from './services/guards/auth.guard';
import { notAuthenticatedUserGuard } from './services/guards/not-authenticated-user.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard],
    title: 'Home',
  },
  {
    path: 'profile',
    component: AssociateProfileComponent,
    //canActivate: [authGuard],
    title: 'Associate Profile',
  },
  {
    path: 'register',
    component: AssociateRegistryComponent,
    //canActivate: [notAuthenticatedUserGuard],
    title: 'Associate Registry',
  },
  {
    path: 'login',
    component: AssociateLoginComponent,
    //canActivate: [notAuthenticatedUserGuard],
    title: 'Associate Login',
  }
];
