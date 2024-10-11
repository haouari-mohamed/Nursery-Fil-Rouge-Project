import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContactMessage } from 'src/app/Shared Components/models/global.model';

@Component({
  selector: 'app-contact-detail-dialog',
  templateUrl: './contact-detail-dialog.component.html',
  styleUrls: ['./contact-detail-dialog.component.css']
})
export class ContactDetailDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ContactMessage,
    private dialogRef: MatDialogRef<ContactDetailDialogComponent> 
  ) { }

  close(): void {
    this.dialogRef.close(); 
  }
}
