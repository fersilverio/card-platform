import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserLoginService } from '../services/user-login.service';
import { LoadingComponent } from '../shared/loading/loading.component';
import { CommonModule } from '@angular/common';
import { ToastComponent } from '../shared/toast/toast.component';
import { animate, state, style, transition, trigger } from '@angular/animations';



@Component({
  selector: 'app-associate-login',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, ReactiveFormsModule, LoadingComponent, ToastComponent],
  providers: [],
  templateUrl: './associate-login.component.html',
  styleUrl: './associate-login.component.css',
  animations: [
    trigger('showToast', [
      state('hide', style({ opacity: 0 })),
      state('show', style({ opacity: 1 })),
      transition('hide => show', animate('0.3s ease-in'))
    ])
  ],
})
export class AssociateLoginComponent {
  constructor(
    private readonly userLoginService: UserLoginService,
    private readonly router: Router
  ) { }

  applyForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  loading = false;
  isToastVisible = false;


  submitForm() {
    if (this.applyForm.valid) {
      this.loading = true;

      this.userLoginService.login(this.applyForm.value.email, this.applyForm.value.password).subscribe({
        next: () => {
          this.loading = false;
          this.showToast();
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 1000);
        },
        error: (error) => {
          this.loading = false;
          console.error('Error:', error);
        },
        complete: () => {
          this.applyForm.reset();

        },
      });
    }
  }

  showToast() {
    this.isToastVisible = this.isToastVisible ? false : true;
  }
}
