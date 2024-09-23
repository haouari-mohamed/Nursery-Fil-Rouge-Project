import { Component, OnInit } from '@angular/core';
import { EvenementService } from 'src/app/Shared Components/services/evenement.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  evenements: any[] = [];
  evenement: any;
  error: string = '';

  constructor(private evenementService: EvenementService) {}

  ngOnInit(): void {
    this.loadEvenements();
  }

  // Fetch all events
  loadEvenements(): void {
    this.evenementService.getAllEvenements().subscribe(
      (data) => {
        this.evenements = data;
      },
      (error) => {
        console.error('Error fetching events', error);
        this.error = 'Unable to fetch events';
      }
    );
  }

  // Fetch event by id
  loadEvenementById(id: number): void {
    this.evenementService.getEvenementById(id).subscribe(
      (data) => {
        this.evenement = data;
      },
      (error) => {
        console.error('Error fetching event by ID', error);
        this.error = 'Unable to fetch event by ID';
      }
    );
  }

  // Create a new event
  createEvenement(evenementData: any): void {
    this.evenementService.createEvenement(evenementData).subscribe(
      (data) => {
        console.log('Event created successfully', data);
        this.loadEvenements(); // Reload events
      },
      (error) => {
        console.error('Error creating event', error);
        this.error = 'Unable to create event';
      }
    );
  }

  // Update an event
  updateEvenement(id: number, updatedData: any): void {
    this.evenementService.updateEvenement(id, updatedData).subscribe(
      (data) => {
        console.log('Event updated successfully', data);
        this.loadEvenements(); // Reload events
      },
      (error) => {
        console.error('Error updating event', error);
        this.error = 'Unable to update event';
      }
    );
  }

  // Delete an event
  deleteEvenement(id: number): void {
    this.evenementService.deleteEvenement(id).subscribe(
      () => {
        console.log('Event deleted successfully');
        this.loadEvenements(); // Reload events
      },
      (error) => {
        console.error('Error deleting event', error);
        this.error = 'Unable to delete event';
      }
    );
  }
  
}
