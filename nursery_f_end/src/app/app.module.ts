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
import { ParentInquiryComponent } from './admin/parent-inquiry/parent-inquiry.component';
import { ListManagementComponent } from './admin/list-management/list-management.component';
import { AuthInterceptor } from './interceptors/interceptors.component';
import { Header2Component } from './Core Components/header2/header2.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { MatTableModule } from '@angular/material/table';
import { DashboardheaderComponent } from './admin/dashboardheader/dashboardheader.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
/* import { FlexLayoutModule } from '@angular/flex-layout'; */
import { MatFormFieldModule } from '@angular/material/form-field';
import { UpdateCrecheDialogComponent } from './admin/update-creche-dialog/update-creche-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { EventMangementComponent } from './admin/event-mangement/event-mangement.component';


/* import { EventComponent } from './admin/event/event.component'; */

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
    DashboardheaderComponent,
    UpdateCrecheDialogComponent,
    EventMangementComponent,
  /*   EventComponent */
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule ,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, 
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    /* FlexLayoutModule, */
    MatFormFieldModule,
    MatInputModule,
    
    MatCardModule,
   
   
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
