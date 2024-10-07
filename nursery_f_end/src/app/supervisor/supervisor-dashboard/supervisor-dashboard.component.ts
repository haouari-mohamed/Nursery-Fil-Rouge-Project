import { Component, OnInit } from '@angular/core';
import { Evenement } from 'src/app/Shared Components/models/global.model';
import { EvenementService } from 'src/app/Shared Components/services/evenement.service';

@Component({
  selector: 'app-supervisor-dashboard',
  templateUrl: './supervisor-dashboard.component.html',
  styleUrls: ['./supervisor-dashboard.component.css']
})
export class SupervisorDashboardComponent implements OnInit {
  currentDate: Date = new Date();
  supervisorName: string = 'Supervisor'; 
  events: Evenement[] = [];

  constructor(private evenementService: EvenementService) { }

  ngOnInit(): void {
    this.loadEvenements();
  }

  loadEvenements(): void {
    this.evenementService.getAllEvenements().subscribe(
      (data: Evenement[]) => {
        this.events = data; 
      },
      (error) => {
        console.error('Error fetching events', error);
      }
    );
  }
}