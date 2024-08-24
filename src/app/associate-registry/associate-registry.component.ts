import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserCrudService } from '../shared/services/user-crud.service';
import { UserRole } from '../shared/enums/UserRole';
import { IUserRegistry } from '../shared/interfaces/user.interface';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { ToastComponent } from '../shared/components/toast/toast.component';
import { LoadingComponent } from '../shared/components/loading/loading.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-associate-registry',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastComponent, LoadingComponent],
  providers: [UserCrudService],
  templateUrl: './associate-registry.component.html',
  styleUrl: './associate-registry.component.css',
  animations: [
    trigger('showToast', [
      state('hide', style({ opacity: 0 })),
      state('show', style({ opacity: 1 })),
      transition('hide <=> show', animate('0.3s ease-in'))
    ])
  ],
})
export class AssociateRegistryComponent {
  isAdmin: boolean = false


  loading = false;

  isToastVisible = false;
  toastTitle!: string;
  toastClass!: string;
  toastMessage!: string;

  registryForm = new FormGroup({
    name: new FormControl('', Validators.required),
    nickName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private readonly userCrud: UserCrudService, private readonly router: Router) { }

  submitForm() {
    if (this.registryForm.valid) {
      this.loading = true;

      this.userCrud.createAssociateUser({
        name: this.registryForm.value.name,
        nickName: this.registryForm.value.nickName,
        email: this.registryForm.value.email,
        password: this.registryForm.value.password,
        role: this.isAdmin ? UserRole.ADMIN : UserRole.USER
      } as IUserRegistry).subscribe({
        next: () => {
          this.registryForm.reset();
          this.loading = false;
          this.toastTitle = 'Sucesso';
          this.toastMessage = 'Associado cadastrado!';
          this.toastClass = 'bg-green-500'
          this.showToast();
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 1000);
        },
        error: (error) => {
          this.loading = false;
          this.toastTitle = "Erro"
          this.toastMessage = 'Cadastro falhou!'
          this.toastClass = 'bg-red-500'
          this.showToast();
          console.error('Error:', error);
        },
        complete: () => { },
      });
    }
  }

  showToast() {
    this.isToastVisible = this.isToastVisible ? false : true;
  }
}
