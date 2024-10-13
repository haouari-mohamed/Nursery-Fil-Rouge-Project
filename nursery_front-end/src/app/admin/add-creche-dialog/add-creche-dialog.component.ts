import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-creche-dialog',
  templateUrl: './add-creche-dialog.component.html',
})
export class AddCrecheDialogComponent {
  crecheForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddCrecheDialogComponent>
  ) {
    this.crecheForm = this.fb.group({
      nom: ['', Validators.required],
      ville: ['', Validators.required],
      adresse: ['', Validators.required],
      codePostal: ['', Validators.required],
      capacite: ['', [Validators.required, Validators.min(1)]],
      horairesOuverture: ['', Validators.required],
      tarifs: ['', Validators.pattern("^[0-9]*$")],
      imageUrl:['', Validators.required]
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.crecheForm.valid) {
      this.dialogRef.close(this.crecheForm.value);
    }
  }
}
