import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserCrudService } from '../services/user-crud.service';
import { IUserRegistry } from '../interfaces/user.interface';
import { UserRole } from '../shared/enums/UserRole';

@Component({
  selector: 'app-associate-registry',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [UserCrudService],
  templateUrl: './associate-registry.component.html',
  styleUrl: './associate-registry.component.css'
})
export class AssociateRegistryComponent {
  isAdmin: boolean = false

  registryForm = new FormGroup({
    name: new FormControl('', Validators.required),
    nickName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private readonly userCrud: UserCrudService) { }

  submitForm() {
    if (this.registryForm.valid) {
      this.userCrud.createAssociateUser({
        name: this.registryForm.value.name,
        nickName: this.registryForm.value.nickName,
        email: this.registryForm.value.email,
        password: this.registryForm.value.password,
        role: this.isAdmin ? UserRole.ADMIN : UserRole.USER
      } as IUserRegistry).subscribe({
        next: () => {
          this.registryForm.reset();
        },
        error: (error) => {
          console.error('Error:', error);
        },
        complete: () => { },
      });
    }
  }
}
