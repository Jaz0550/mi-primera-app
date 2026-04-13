import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal';
import { FormComponent } from '../form/form';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './login.html',
  styleUrl: './login.css',
})



export class LoginComponent {

  isModalOpen = false;

openModal() {
  this.isModalOpen = true;
}

closeModal() {
  this.isModalOpen = false;
}

handleLogin(data: any) {
  console.log('Login:', data);
}
  
}


