import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AuthGuard } from './Shared Components/services/auth.guard';
import { SupervisorProfileComponent } from './admin/supervisor-profile/supervisor-profile.component';
import { RegisterComponent } from './auth/register/register.component';
import { NurseryProfileComponent } from './admin/nursery-profile/nursery-profile.component';
import { AvailabilityManagementComponent } from './admin/availability-management/availability-management.component';
import { ParentInquiryComponent } from './admin/parent-inquiry/parent-inquiry.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { 
    path: 'admin', 
    component: DashboardComponent, 
   /*  canActivate: [AuthGuard],
    data: { role: 'ADMINISTRATEUR' }, */
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'supervisor-profile', component: SupervisorProfileComponent },
      { path: 'nursery-profile', component: NurseryProfileComponent },
      { path: 'parent-management', component: ParentInquiryComponent },
    /*   { path: 'events', component: EventsComponent }, */
      { path: 'availability-management', component: AvailabilityManagementComponent },
     /*  { path: 'contacts', component: ContactsComponent } */
    ]
  },
  { path: 'superviseur', component: SupervisorProfileComponent, canActivate: [AuthGuard], data: { role: 'SUPERVISEUR' } },
  { path: 'user/home', component: HomeComponent, canActivate: [AuthGuard], data: { role: 'PARENT' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }