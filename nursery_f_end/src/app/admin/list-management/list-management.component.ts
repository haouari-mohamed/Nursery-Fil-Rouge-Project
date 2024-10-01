import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Creche } from 'src/app/Shared Components/models/global.model';
import { CrecheService } from 'src/app/Shared Components/services/creche.service';
import { UpdateCrecheDialogComponent } from '../update-creche-dialog/update-creche-dialog.component';
import { AddCrecheDialogComponent } from '../add-creche-dialog/add-creche-dialog.component';


@Component({
  selector: 'app-list-management',
  templateUrl: './list-management.component.html',
  styleUrls: ['./list-management.component.css']
})
export class ListManagementComponent implements OnInit {
  creches: Creche[] = [];
  dataSource = new MatTableDataSource<Creche>(this.creches);
  displayedColumns: string[] = ['id', 'nom', 'ville', 'adresse', 'capacite', 'actions'];

  constructor(private crecheService: CrecheService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadCreches();
   
  }

  // Load crèches from service
  loadCreches(): void {
    this.crecheService.getAllCreches().subscribe(data => {
      this.creches = data;
      this.dataSource.data = this.creches;
    });
  }

  // Open the dialog to update a crèche
  openUpdateDialog(creche: Creche) {
    const dialogRef = this.dialog.open(UpdateCrecheDialogComponent, {
      width: '400px',
      data: { creche: { ...creche } }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateCreche(result);
      }
    });
  }

  // Open the dialog to create a new crèche
  openCreateDialog() {
    const dialogRef = this.dialog.open(AddCrecheDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createCreche(result); 
      }
    });
  }

  // Update an existing crèche
  updateCreche(updatedCreche: Creche) {
    this.crecheService.updateCreche(updatedCreche.id, updatedCreche).subscribe(() => {
      const index = this.creches.findIndex(c => c.id === updatedCreche.id);
      if (index !== -1) {
        this.creches[index] = { ...updatedCreche };
        this.dataSource.data = [...this.creches];
      }
    });
  }

  // Create a new crèche and update the table
  createCreche(newCreche: Creche) {
    this.crecheService.addCreche(newCreche).subscribe(createdCreche => {
      this.creches.push(createdCreche);
      this.dataSource.data = [...this.creches];  
    });
  }

}
