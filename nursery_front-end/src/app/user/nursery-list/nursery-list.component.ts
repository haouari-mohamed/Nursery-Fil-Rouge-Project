import { Component, OnInit, ViewChild } from '@angular/core';
import { Creche } from 'src/app/Shared Components/models/global.model';
import { CrecheService } from 'src/app/Shared Components/services/creche.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-nursery-list',
  templateUrl: './nursery-list.component.html',
  styleUrls: ['./nursery-list.component.css']
})
export class NurseryListComponent implements OnInit {
  creches: Creche[] = [];
  filteredNurseries: Creche[] = [];
  paginatedNurseries: Creche[] = [];
  nurserySearchTerm: string = '';
  nurseryPageSize: number = 5;
  nurseryCurrentPage: number = 0;
  displayedColumns: string[] = ['id', 'nom', 'codePostal', 'ville', 'capacite'];

  @ViewChild(MatPaginator, { static: false }) paginator?: MatPaginator;

  constructor(private crecheService: CrecheService) {}

  ngOnInit(): void {
    this.loadNurseries();
  }

  loadNurseries(): void {
    this.crecheService.getAllCreches().subscribe(
      (data: Creche[]) => {
        this.creches = data;
        this.filteredNurseries = data;  
        this.updatePaginatedNurseries(); 
      },
      (error) => {
        console.error('Error fetching nurseries', error);
      }
    );
  }

  applyNurseryFilter(): void {
    const filterValue = this.nurserySearchTerm.trim().toLowerCase();
    this.filteredNurseries = this.creches.filter(nursery => 
      nursery.nom.toLowerCase().includes(filterValue)
    );
    this.nurseryCurrentPage = 0; 
    this.updatePaginatedNurseries();
  }

  onNurseryPageChange(event: any): void {
    this.nurseryCurrentPage = event.pageIndex;
    this.nurseryPageSize = event.pageSize;
    this.updatePaginatedNurseries();
  }

  updatePaginatedNurseries(): void {
    const startIndex = this.nurseryCurrentPage * this.nurseryPageSize;
    this.paginatedNurseries = this.filteredNurseries.slice(startIndex, startIndex + this.nurseryPageSize);
  }
}
