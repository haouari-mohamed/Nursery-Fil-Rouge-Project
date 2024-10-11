import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SuperviseurService } from '../../Shared Components/services/superviseur.service';

@Component({
  selector: 'app-register-supervisor-dialog',
  templateUrl: './register-supervisor-dialog.component.html',
  styleUrls: ['./register-supervisor-dialog.component.css']
})
export class RegisterSupervisorDialogComponent {
  newSuperviseur = {
    nom: '',
    prenom: '',
    email: '',
    password: '',  
    crecheId: null
  };

  constructor(
    public dialogRef: MatDialogRef<RegisterSupervisorDialogComponent>,
    private superviseurService: SuperviseurService
  ) {}

  register(): void {
    this.superviseurService.registerSuperviseur(this.newSuperviseur).subscribe(() => {
      this.dialogRef.close(true);  
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
