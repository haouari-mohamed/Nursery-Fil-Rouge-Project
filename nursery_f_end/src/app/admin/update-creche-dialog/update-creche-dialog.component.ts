import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Creche } from 'src/app/Shared Components/models/global.model';

@Component({
  selector: 'app-update-creche-dialog',
  templateUrl: './update-creche-dialog.component.html',
  styleUrls: ['./update-creche-dialog.component.css']
})
export class UpdateCrecheDialogComponent implements OnInit {
  crecheForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UpdateCrecheDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { creche: Creche }
  ) {
    this.crecheForm = this.fb.group({
      id: [{ value: '', disabled: true }],
      nom: ['', Validators.required],
      adresse: ['', Validators.required],
      codePostal: ['', Validators.required],
      ville: ['', Validators.required],
      capacite: ['', [Validators.required, Validators.min(1)]],
      horairesOuverture: ['', Validators.required],
      tarifs: ['']
    });
  }

  ngOnInit() {
    if (this.data.creche) {
      this.crecheForm.patchValue(this.data.creche);
    }


  /* if (this.data.isViewMode) {
    this.crecheForm.disable(); 
  } */
  }

  onSubmit() {
    if (this.crecheForm.valid) {
      const updatedCreche: Creche = {
        ...this.crecheForm.value,
        id: this.data.creche.id
      };
      this.dialogRef.close(updatedCreche);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}