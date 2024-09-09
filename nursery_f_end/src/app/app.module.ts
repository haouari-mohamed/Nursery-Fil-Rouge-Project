import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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


@NgModule({
  declarations: [

  
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
        ListManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
