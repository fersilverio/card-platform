import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserLoginService } from '../services/user-login.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-associate-login',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ReactiveFormsModule],
  templateUrl: './associate-login.component.html',
  styleUrl: './associate-login.component.css'
})
export class AssociateLoginComponent {
  constructor(private readonly userLoginService: UserLoginService) { }


  applyForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });






  submitForm() {
    console.log('Email:', this.applyForm.value.email);
    console.log('Password:', this.applyForm.value.password);
    this.userLoginService.login(this.applyForm.value.email, this.applyForm.value.password);
  }
}
