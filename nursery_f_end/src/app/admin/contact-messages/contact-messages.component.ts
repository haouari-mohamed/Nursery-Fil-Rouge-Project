import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactDetailDialogComponent } from '../contact-detail-dialog/contact-detail-dialog.component';
import { ContactService } from 'src/app/Shared Components/services/contact.service';
import { ContactMessage } from 'src/app/Shared Components/models/global.model';

@Component({
  selector: 'app-contact-messages',
  templateUrl: './contact-messages.component.html',
  styleUrls: ['./contact-messages.component.css']
})
export class ContactMessagesComponent implements OnInit {
  messages: ContactMessage[] = [];

  constructor(private contactService: ContactService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllMessages();
  }

  getAllMessages(): void {
    this.contactService.getAllMessages().subscribe(data => {
      this.messages = data;
    });
  }

  openMessageDetail(message: ContactMessage): void {
    this.dialog.open(ContactDetailDialogComponent, {
      data: message
    });
  }
}
