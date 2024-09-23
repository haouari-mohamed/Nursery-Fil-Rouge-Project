import { Component, OnInit } from '@angular/core';
import { EvenementService } from '../../Shared Components/services/evenement.service';

@Component({
  selector: 'app-availability-management',
  templateUrl: './availability-management.component.html',
  styleUrls: ['./availability-management.component.css']
})
export class AvailabilityManagementComponent implements OnInit {
  evenements: any[] = [];

  constructor(private evenementService: EvenementService) {}

  ngOnInit(): void {
    this.loadEvenements();
  }

  loadEvenements(): void {
    this.evenementService.getAllEvenements().subscribe((data: any[]) => {
      this.evenements = data;
    });
  }
}
