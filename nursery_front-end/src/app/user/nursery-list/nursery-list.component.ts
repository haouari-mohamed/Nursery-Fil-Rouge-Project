import { Component, OnInit } from '@angular/core';
import { Creche } from 'src/app/Shared Components/models/global.model';
import { CrecheService } from 'src/app/Shared Components/services/creche.service';

@Component({
  selector: 'app-nursery-list',
  templateUrl: './nursery-list.component.html',
  styleUrls: ['./nursery-list.component.css']
})
export class NurseryListComponent implements OnInit {


  creches: Creche[] = [];
  displayedColumns: string[] = ['id', 'nom', 'codePostal', 'ville', 'capacite'];

  constructor(private crecheService: CrecheService) { }

  ngOnInit(): void {
    this.crecheService.getAllCreches().subscribe(data => {
      this.creches = data;
    });
  
  }
}
