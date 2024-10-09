import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Evenement } from 'src/app/Shared Components/models/global.model';
import { EvenementService } from 'src/app/Shared Components/services/evenement.service';
import { EventDialogComponent } from '../event-dialog/event-dialog.component';

@Component({
  selector: 'app-event-mangement-ad-sup',
  templateUrl: './event-mangement-ad-sup.component.html',
  styleUrls: ['./event-mangement-ad-sup.component.css']
})
export class EventMangementAdSupComponent  implements OnInit {
  displayedColumns: string[] = ['id', 'nom', 'description', 'date', 'actions'];
  dataSource: Evenement[] = [];

  constructor(private evenementService: EvenementService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadEvenements();
  }

  loadEvenements(): void {
    this.evenementService.getAllEvenements().subscribe(evenements => {
      this.dataSource = evenements;
    });
  }

  openDialog(event?: Evenement): void {
    const dialogRef = this.dialog.open(EventDialogComponent, {
      data: event ? { ...event } : { nom: '', description: '', date: new Date(), creche: { id: 0 } }, 
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (event) {
          // Update existing event
          this.evenementService.updateEvenement(event.id, result).subscribe(() => {
            this.loadEvenements();
          });
        } else {
          // Add new event
          this.evenementService.createEvenement(result).subscribe({
            next: () => this.loadEvenements(),
            error: (err) => console.error('Error creating event:', err)
          });
        }
      }
    });
  }
  
  deleteEvent(id: number): void {
    this.evenementService.deleteEvenement(id).subscribe(() => {
      this.loadEvenements();
    });
  }
}
