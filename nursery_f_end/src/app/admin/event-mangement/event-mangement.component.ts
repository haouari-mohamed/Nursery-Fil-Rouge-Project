import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Evenement } from 'src/app/Shared Components/models/global.model';
import { EvenementService } from 'src/app/Shared Components/services/evenement.service';
import { EventDialogComponent } from '../event-dialog/event-dialog.component';

@Component({
  selector: 'app-event-management',
  templateUrl: './event-mangement.component.html',
  styleUrls: ['./event-mangement.component.css']
})
export class EventMangementComponent {}