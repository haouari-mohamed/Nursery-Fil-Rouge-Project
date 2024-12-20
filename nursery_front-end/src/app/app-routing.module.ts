import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AuthGuard } from './Shared Components/services/auth.guard';
import { SupervisorProfileComponent } from './admin/supervisor-profile/supervisor-profile.component';
import { RegisterComponent } from './auth/register/register.component';
import { NurseryProfileComponent } from './admin/nursery-profile/nursery-profile.component';
import { AvailabilityManagementComponent } from './admin/availability-management/availability-management.component';

import { NurseryListComponent } from './user/nursery-list/nursery-list.component';
import { ListManagementComponent } from './admin/list-management/list-management.component';
import { ContactFormComponent } from './user/contact-form/contact-form.component';
import { EventmangementComponent } from './supervisor/eventmangement/eventmangement.component';
import { Header2Component } from './Core Components/header2/header2.component';
import { ParentInquiryComponent } from './admin/parent-inquiry/parent-inquiry.component';
import { ContactMessagesComponent } from './admin/contact-messages/contact-messages.component';
import { EurrorPageComponent } from './Core Components/eurror-page/eurror-page.component';
import { AboutComponent } from './user/about/about.component';
import { SupervisorDashboardComponent } from './supervisor/supervisor-dashboard/supervisor-dashboard.component';
import { EventMangementComponent } from './admin/event-mangement/event-mangement.component';
import { NurseryCardComponent } from './user/nursery-card/nursery-card.component';
import { CartVisibleComponent } from './user/cart-visible/cart-visible.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'nruseryitem', component: NurseryCardComponent },
  { path: 'cart', component: CartVisibleComponent },

  {path : 'superviseur', component : SupervisorDashboardComponent},
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
      
      
     /*  { path: 'contacts', component: ContactsComponent } */
    
    ]
  },
/*   { path: 'superviseur', component: SupervisorProfileComponent, canActivate: [AuthGuard], data: { role: 'SUPERVISEUR' } },
 */  { path: 'user/home', component: HomeComponent, canActivate: [AuthGuard], data: { role: 'PARENT' } },
  {path: 'list', component: NurseryListComponent},
  {path: 'listmangement', component: ListManagementComponent},
  {path: 'contact', component: ContactFormComponent},
  {path: 'eventmanagement', component: EventMangementComponent},
  {path: 'header2', component: Header2Component},
  {path: 'contactadmin', component : ContactMessagesComponent},
  {path: 'eurror', component: EurrorPageComponent},
  {path: 'about', component: AboutComponent},
  { path: 'availability-management', component: AvailabilityManagementComponent },
  {path : 'eventsupervisor', component: EventmangementComponent},
  { path: 'supervisor-profile', component: SupervisorProfileComponent },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }