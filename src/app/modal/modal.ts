import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class ModalComponent {

  @Input() isOpen = false;

  @Output() closeModal = new EventEmitter<void>();


  close() {
    this.isOpen = false;
  }

}
