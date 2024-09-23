import { Component, OnInit } from '@angular/core';
import { CrecheService } from 'src/app/Shared Components/services/creche.service';

@Component({
  selector: 'app-nursery-profile',
  templateUrl: './nursery-profile.component.html',
  styleUrls: ['./nursery-profile.component.css']
})
export class NurseryProfileComponent implements OnInit {
  creches: any[] = [];

  constructor(private crecheService: CrecheService) {}

  ngOnInit(): void {
    this.loadCreches();
  }

  loadCreches(): void {
    this.crecheService.getAllCreches().subscribe(data => {
      this.creches = data;
    });
  }
}
