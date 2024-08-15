import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserCrudService } from '../services/user-crud.service';
import { IUserRegistry } from '../interfaces/user.interface';

@Component({
  selector: 'app-associate-registry',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [UserCrudService],
  templateUrl: './associate-registry.component.html',
  styleUrl: './associate-registry.component.css'
})
export class AssociateRegistryComponent {
  registryForm = new FormGroup({
    name: new FormControl('', Validators.required),
    nickName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private readonly userCrud: UserCrudService) { }

  submitForm() {
    console.log("rapaz...")
    if (this.registryForm.valid) {
      debugger;
      this.userCrud.createAssociateUser({
        name: this.registryForm.value.name,
        nickName: this.registryForm.value.nickName,
        email: this.registryForm.value.email,
        password: this.registryForm.value.password,
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
