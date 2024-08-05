import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserLoginService } from '../services/user-login.service';
import { LoadingComponent } from '../shared/loading/loading.component';
import { CommonModule } from '@angular/common';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-associate-login',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, ReactiveFormsModule, LoadingComponent, ToastComponent],
  templateUrl: './associate-login.component.html',
  styleUrl: './associate-login.component.css'
})
export class AssociateLoginComponent {
  constructor(private readonly userLoginService: UserLoginService) { }

  applyForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  loading = false;


  submitForm() {
    if (this.applyForm.valid) {
      this.loading = true;
      console.log('Email:', this.applyForm.value.email);
      console.log('Password:', this.applyForm.value.password);
      this.userLoginService.login(this.applyForm.value.email, this.applyForm.value.password).subscribe({
        next: () => {
          this.loading = false;
          console.log("Success")
        },
        error: (error) => {
          this.loading = false;
          console.error('Error:', error);
        }
      });
    }
  }
}
