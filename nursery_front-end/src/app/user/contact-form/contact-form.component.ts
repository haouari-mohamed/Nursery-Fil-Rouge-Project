import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactMessage } from 'src/app/Shared Components/models/global.model';
import { ContactService } from 'src/app/Shared Components/services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  messageSent: boolean = false; 
  errorMessage: string = '';
  successMessage: string = ''; 
  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['']
    });
  }

  ngOnInit(): void {
    this.contactForm.reset();
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.errorMessage = 'Please fill out all required fields correctly.';
      return;
    }

    const contactMessage: ContactMessage = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      phone: this.contactForm.value.phone,
      message: this.contactForm.value.message
    };

    this.contactService.sendMessage(contactMessage).subscribe({
      next: () => {
        this.messageSent = true; 
        this.contactForm.reset();
        this.errorMessage = '';
        //  set a success message if desired
        this.successMessage = 'Your message has been sent successfully!';

        setTimeout(() => {
          this.messageSent = false; 
        }, 5000);
      },
      error: (err) => {
        this.errorMessage = 'There was an error sending your message. Please try again later.';
        console.error(err);
      }
    });
  }

  closeAlert() {
    this.messageSent = false;
  }
}
