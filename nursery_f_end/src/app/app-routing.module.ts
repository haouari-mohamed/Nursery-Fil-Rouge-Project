import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AuthGuard } from './Shared Components/services/auth.guard';
import { SupervisorProfileComponent } from './admin/supervisor-profile/supervisor-profile.component';
import { RegisterComponent } from './auth/register/register.component';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {path: 'registre', component: RegisterComponent},
  { path: 'admin', component: DashboardComponent/* , canActivate: [AuthGuard], data: { role: 'ADMINISTRATEUR' } */ },
  { path: 'superviseur', component: SupervisorProfileComponent,/*  canActivate: [AuthGuard], data: { role: 'SUPERVISEUR' } */ },
  { path: 'user/home', component: HomeComponent, canActivate: [AuthGuard], data: { role: 'PARENT' } },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
