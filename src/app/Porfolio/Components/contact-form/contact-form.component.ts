import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      email: [''],
      message: ['']
    });
  }

  onSubmit(): void {
    this.isSubmitting = true;

    setTimeout(() => {
      this.isSubmitting = false;
      this.showConfirmationModal();
    }, 2000); // 2 segundos de espera
  }

  showConfirmationModal(): void {
    const modal = document.getElementById('confirmationModal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  }

  closeModal(): void {
    const modal = document.getElementById('confirmationModal');
    if (modal) {
      modal.classList.add('hidden');
    }

    this.contactForm.reset();
  }
}