import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AssociateProfileComponent } from './associate-profile/associate-profile.component';
import { HomeComponent } from './home/home.component';
import { UserLoginService } from './services/user-login.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NavbarComponent, FooterComponent, AssociateProfileComponent],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'card-platform';

  constructor(userLoginService: UserLoginService) { }
}
