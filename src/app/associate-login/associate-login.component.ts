import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-associate-login',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ReactiveFormsModule],
  templateUrl: './associate-login.component.html',
  styleUrl: './associate-login.component.css'
})
export class AssociateLoginComponent {


  applyForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });


  submitForm(email: string, password: string) {
    console.log('Emailername:', email);
    console.log('Password:', password);
  }
}
