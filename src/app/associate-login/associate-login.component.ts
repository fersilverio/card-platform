import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserLoginService } from '../shared/services/user-login.service';
import { LoadingComponent } from '../shared/components/loading/loading.component';
import { CommonModule } from '@angular/common';
import { ToastComponent } from '../shared/components/toast/toast.component';
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
      transition('hide <=> show', animate('0.3s ease-in'))
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
  toastTitle!: string;
  toastClass!: string;
  toastMessage!: string;
  toastIcon!: string;


  submitForm() {
    if (this.applyForm.valid) {
      this.loading = true;

      this.userLoginService.login(this.applyForm.value.email, this.applyForm.value.password).subscribe({
        next: () => {
          this.loading = false;
          this.toastTitle = 'Sucesso';
          this.toastMessage = 'Usuário autenticado!';
          this.toastClass = 'bg-green-500'
          this.toastIcon = 'fa-solid fa-circle-check'
          this.showToast();
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 1000);
        },
        error: (error) => {
          this.loading = false;
          this.toastTitle = "Erro"
          this.toastMessage = 'Autenticação falhou!'
          this.toastClass = 'bg-red-500'
          this.toastIcon = 'fa-solid fa-xmark'
          this.showToast();
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
