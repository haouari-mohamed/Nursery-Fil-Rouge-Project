import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Creche, Evenement } from 'src/app/Shared Components/models/global.model';
import { CrecheService } from 'src/app/Shared Components/services/creche.service';
import { EvenementService } from 'src/app/Shared Components/services/evenement.service';

@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.css']
})
export class EventDialogComponent implements OnInit {
  creches: Creche[] = [];

  constructor(
    public dialogRef: MatDialogRef<EventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Evenement,
    private evenementService: EvenementService, private src:CrecheService
  ) {}

  ngOnInit(): void {
    this.loadCreches();
  }

  loadCreches(): void {
    this.src.getAllCreches().subscribe(creches => {
      this.creches = creches;
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close(this.data);
  }
}
