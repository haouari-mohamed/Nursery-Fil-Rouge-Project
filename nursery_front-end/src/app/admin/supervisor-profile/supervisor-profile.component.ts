import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuperviseurService } from '../../Shared Components/services/superviseur.service';
import { RegisterSupervisorDialogComponent } from '../register-supervisor-dialog/register-supervisor-dialog.component';
import { AdminService } from 'src/app/Shared Components/services/admin.service';

@Component({
  selector: 'app-supervisor-profile',
  templateUrl: './supervisor-profile.component.html',
  styleUrls: ['./supervisor-profile.component.css']
})
export class SupervisorProfileComponent implements OnInit {
  superviseurs: any[] = [];
  displayedColumns: string[] = ['nom', 'email', 'creche', 'profil'];

  constructor(
    private superviseurService: SuperviseurService,
    private src : AdminService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadSupervisors();
  }

  loadSupervisors(): void {
    this.src.surveillerActivites().subscribe((data: any[]) => {
      this.superviseurs = data;
    });
  }

  openRegisterDialog(): void {
    const dialogRef = this.dialog.open(RegisterSupervisorDialogComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadSupervisors();  
      }
    });
  }
}
