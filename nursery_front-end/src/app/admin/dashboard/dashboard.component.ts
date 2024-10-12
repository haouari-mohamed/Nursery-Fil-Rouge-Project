import { Component, OnInit, ViewChild } from '@angular/core';
import { Evenement } from 'src/app/Shared Components/models/global.model';
import { EvenementService } from 'src/app/Shared Components/services/evenement.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentDate: Date = new Date();
  adminName: string = 'Admin';
  events: Evenement[] = [];
  paginatedEvents: Evenement[] = [];
  pageSize: number = 3; 
  currentPage: number = 0;

  @ViewChild(MatPaginator, { static: false }) paginator?: MatPaginator; 

  constructor(private evenementService: EvenementService) {}

  ngOnInit(): void {
    this.loadEvenements();
  }

  loadEvenements(): void {
    this.evenementService.getAllEvenements().subscribe(
      (data: Evenement[]) => {
        this.events = data;  
        this.updatePaginatedEvents(); 
      },
      (error) => {
        console.error('Error fetching events', error);
      }
    );
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedEvents();
  }

  updatePaginatedEvents(): void {
    const startIndex = this.currentPage * this.pageSize;
    this.paginatedEvents = this.events.slice(startIndex, startIndex + this.pageSize);
  }
}
