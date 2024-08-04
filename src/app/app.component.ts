import { Component } from '@angular/core';
import { provideRouter, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AssociateProfileComponent } from './associate-profile/associate-profile.component';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserLoginService } from './services/user-login.service';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NavbarComponent, FooterComponent, AssociateProfileComponent, HttpClientModule],
  providers: [UserLoginService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'card-platform';

  constructor(userLoginService: UserLoginService) { }
}
