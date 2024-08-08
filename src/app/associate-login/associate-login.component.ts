import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserLoginService } from '../services/user-login.service';
import { LoadingComponent } from '../shared/loading/loading.component';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-associate-login',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, ReactiveFormsModule, LoadingComponent, ToastModule, ButtonModule, RippleModule, ToastComponent],
  providers: [MessageService],
  templateUrl: './associate-login.component.html',
  styleUrl: './associate-login.component.css'
})
export class AssociateLoginComponent {
  constructor(
    private readonly userLoginService: UserLoginService,
    private messageService: MessageService
  ) { }

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

  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }
}
