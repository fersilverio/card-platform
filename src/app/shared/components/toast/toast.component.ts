import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
})
export class ToastComponent {
  @Input()
  title!: string;

  @Input()
  message!: string;

  @Input()
  classColor!: string;

}
