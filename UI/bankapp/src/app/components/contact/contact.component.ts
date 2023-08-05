import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'bank-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  contactId!: string;

  constructor(
    private fb: FormBuilder,
    private dashboardService: DashboardService
  ) {}
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      contactName: new FormControl('', [Validators.required]),
      contactEmail: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this.dashboardService
      .saveContact(this.contactForm.value)
      .subscribe((data: any) => {
        this.contactId = data.body.contactId;
        console.log('Data submitted');
        this.contactForm.reset();
      });
  }
}
