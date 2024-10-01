import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Creche } from 'src/app/Shared Components/models/global.model';
import { CrecheService } from 'src/app/Shared Components/services/creche.service';
import { UpdateCrecheDialogComponent } from '../update-creche-dialog/update-creche-dialog.component';

@Component({
  selector: 'app-list-management',
  templateUrl: './list-management.component.html',
  styleUrls: ['./list-management.component.css']
})
export class ListManagementComponent implements OnInit {
  creches: Creche[] = [];
  dataSource = new MatTableDataSource<Creche>(this.creches);
  displayedColumns: string[] = ['id', 'nom', 'actions'];
  selectedCreche: Creche | null = null;

  constructor(private crecheService: CrecheService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadCreches();
  }

  loadCreches(): void {
    this.crecheService.getAllCreches().subscribe(data => {
      this.creches = data;
      this.dataSource.data = this.creches;
    });
  }

  openUpdateDialog(creche: Creche) {
    this.selectedCreche = { ...creche };
    const dialogRef = this.dialog.open(UpdateCrecheDialogComponent, {
      width: '400px',
      data: { creche: this.selectedCreche }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateCreche(result);
      }
      this.selectedCreche = null;
    });
  }

  updateCreche(updatedCreche: Creche) {
    this.crecheService.updateCreche(updatedCreche.id, updatedCreche).subscribe(() => {
      const index = this.creches.findIndex(c => c.id === updatedCreche.id);
      if (index !== -1) {
        this.creches[index] = { ...updatedCreche };
        this.dataSource.data = [...this.creches];
      }
      this.loadCreches(); 
    });
  }

  
}