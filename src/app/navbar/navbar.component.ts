import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserLoginService } from '../services/user-login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router, private userLoginService: UserLoginService) { }

  isLogged = false;

  ngOnInit(): void {
    this.userLoginService.isLoggedIn$.subscribe((loggedIn) => {
      this.isLogged = loggedIn;
    })
  }

  triggerLogout() {
    this.userLoginService.logout();
    this.router.navigate(['/login']);
  }
}
