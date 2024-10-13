import { Component, OnInit } from '@angular/core';
import { Creche } from 'src/app/Shared Components/models/global.model';
import { CrecheService } from 'src/app/Shared Components/services/creche.service';

@Component({
  selector: 'app-nursery-card',
  templateUrl: './nursery-card.component.html',
  styleUrls: ['./nursery-card.component.css']
})
export class NurseryCardComponent implements OnInit {
  creches: Creche[] = [];

  constructor(private crecheService: CrecheService) {}

  ngOnInit(): void {
    this.fetchCreches();
  }

  fetchCreches(): void {
    this.crecheService.getAllCreches().subscribe(
      (data: Creche[]) => {
        this.creches = data;
      },
      (error) => {
        console.error('Error fetching crèches', error);
      }
    );
  }
}