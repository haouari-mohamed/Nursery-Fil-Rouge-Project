import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EvenementService } from '../../Shared Components/services/evenement.service'; 
import { Evenement } from '../../Shared Components/models/global.model'; 

@Component({
  selector: 'app-eventmangement',
  templateUrl: './eventmangement.component.html',
  styleUrls: ['./eventmangement.component.css']
})
export class EventmangementComponent implements OnInit {
  events: Evenement[] = [];
  eventForm: FormGroup;
  selectedEventId: number | null = null;

  constructor(
    private evenementService: EvenementService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required],
      crecheId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.evenementService.getAllEvenements().subscribe(
      (data: Evenement[]) => {
        this.events = data;
      },
      (error) => {
        this.showSnackBar('Error loading events');
      }
    );
  }

  onSubmit(): void {
    if (this.eventForm.valid) {
      const event = this.eventForm.value;

      if (this.selectedEventId) {
        this.evenementService.updateEvenement(this.selectedEventId, event).subscribe(
          () => {
            this.loadEvents();
            this.resetForm();
            this.showSnackBar('Event updated successfully');
          },
          () => {
            this.showSnackBar('Error updating event');
          }
        );
      } else {
        this.evenementService.createEvenement(event).subscribe(
          () => {
            this.loadEvents();
            this.resetForm();
            this.showSnackBar('Event created successfully');
          },
          () => {
            this.showSnackBar('Error creating event');
          }
        );
      }
    }
  }

  editEvent(event: Evenement): void {
    this.selectedEventId = event.id;
    this.eventForm.patchValue(event);
  }

  deleteEvent(id: number): void {
    this.evenementService.deleteEvenement(id).subscribe(() => {
      this.loadEvents();
      this.showSnackBar('Event deleted successfully');
    }, () => {
      this.showSnackBar('Error deleting event');
    });
  }

  resetForm(): void {
    this.eventForm.reset();
    this.selectedEventId = null;
  }

  showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', { duration: 3000 });
  }
}
