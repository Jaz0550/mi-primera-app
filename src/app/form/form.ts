import { Component, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class FormComponent  {

  @Input() title = '';
  @Input() showEmail = false;

  @Output() formSubmit = new EventEmitter<any>();

  user = {
    username: '',
    email: '',
    password: ''
  };

  submit() {
    this.formSubmit.emit(this.user);
  }

}
