import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; 
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Core Components/header/header.component';
import { FooterComponent } from './Core Components/footer/footer.component';
import { NavigationComponent } from './Core Components/navigation/navigation.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { HomeComponent } from './user/home/home.component';
import { NurserySearchComponent } from './user/nursery-search/nursery-search.component';
import { MapComponent } from './user/map/map.component';
import { NurseryListComponent } from './user/nursery-list/nursery-list.component';
import { NurseryDetailComponent } from './user/nursery-detail/nursery-detail.component';
import { ReviewComponent } from './user/review/review.component';
import { ContactFormComponent } from './user/contact-form/contact-form.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NurseryProfileComponent } from './admin/nursery-profile/nursery-profile.component';
import { AvailabilityManagementComponent } from './admin/availability-management/availability-management.component';
import { SupervisorProfileComponent } from './admin/supervisor-profile/supervisor-profile.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ListManagementComponent } from './admin/list-management/list-management.component';
import { AuthInterceptor } from './interceptors/interceptors.component';
import { Header2Component } from './Core Components/header2/header2.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { DashboardheaderComponent } from './admin/dashboardheader/dashboardheader.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UpdateCrecheDialogComponent } from './admin/update-creche-dialog/update-creche-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { EventMangementComponent } from './admin/event-mangement/event-mangement.component';
import { AddCrecheDialogComponent } from './admin/add-creche-dialog/add-creche-dialog.component';
import { EventDialogComponent } from './admin/event-dialog/event-dialog.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select'; 
import { ParentInquiryComponent } from './admin/parent-inquiry/parent-inquiry.component';
import { ContactMessagesComponent } from './admin/contact-messages/contact-messages.component';
import { ContactDetailDialogComponent } from './admin/contact-detail-dialog/contact-detail-dialog.component';
import { EurrorPageComponent } from './Core Components/eurror-page/eurror-page.component';
import { AboutComponent } from './user/about/about.component';
import { SupervisorDashboardComponent } from './supervisor/supervisor-dashboard/supervisor-dashboard.component';

import { EventmangementComponent } from './supervisor/eventmangement/eventmangement.component';
import { DashboardheadComponent } from './supervisor/dashboardhead/dashboardhead.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { SidebarSupComponent } from './supervisor/sidebar/sidebar.component';
import { SupervisorinfoComponent } from './supervisor/supervisorinfo/supervisorinfo.component';
import { EventMangementAdSupComponent } from './admin/event-mangement-ad-sup/event-mangement-ad-sup.component';
import { RegisterSupervisorDialogComponent } from './admin/register-supervisor-dialog/register-supervisor-dialog.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NurseryCardComponent } from './user/nursery-card/nursery-card.component';
import { CartVisibleComponent } from './user/cart-visible/cart-visible.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    HomeComponent,
    NurserySearchComponent,
    MapComponent,
    NurseryListComponent,
    NurseryDetailComponent,
    ReviewComponent,
    ContactFormComponent,
    DashboardComponent,
    NurseryProfileComponent,
    AvailabilityManagementComponent,
    SupervisorProfileComponent,
    ParentInquiryComponent,
    ListManagementComponent,
    Header2Component,
    SidebarComponent,
    SidebarSupComponent,
    DashboardheaderComponent,
    UpdateCrecheDialogComponent,
    EventMangementComponent,
    AddCrecheDialogComponent,
    EventDialogComponent,
    ContactMessagesComponent,
    ContactDetailDialogComponent,
    EurrorPageComponent,
    AboutComponent,
    SupervisorDashboardComponent,
    EventmangementComponent,
    DashboardheadComponent,
    SupervisorinfoComponent,
    EventMangementAdSupComponent,
    RegisterSupervisorDialogComponent,
    NurseryCardComponent,
    CartVisibleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, 
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatNativeDateModule, 
    MatDatepickerModule, 
    MatSelectModule,
    MatSnackBarModule,
    MatPaginatorModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
