import { Component, OnInit } from '@angular/core';
import { Evenement } from 'src/app/Shared Components/models/global.model';
import { EvenementService } from 'src/app/Shared Components/services/evenement.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentDate: Date = new Date();
  adminName: string = 'Admin'; 
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