import { Component } from '@angular/core';
import { FormComponent } from '../form/form';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {

  handleRegister(data: any) {
  console.log('Registro:', data);
}
}


