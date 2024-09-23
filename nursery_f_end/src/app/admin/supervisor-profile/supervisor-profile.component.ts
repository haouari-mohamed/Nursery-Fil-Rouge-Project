import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../Shared Components/services/admin.service';

@Component({
  selector: 'app-supervisor-profile',
  templateUrl: './supervisor-profile.component.html',
  styleUrls: ['./supervisor-profile.component.css']
})
export class SupervisorProfileComponent implements OnInit {
  superviseurs: any[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadSupervisors();
  }

  loadSupervisors(): void {
    this.adminService.surveillerActivites().subscribe((data: any[]) => {
      this.superviseurs = data.filter(user => user.type === 'SUPERVISEUR');
    });
  }
}
