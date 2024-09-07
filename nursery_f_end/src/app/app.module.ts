import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Core Components/header/header.component';
import { FooterComponent } from './Core Components/footer/footer.component';
import { NavigationComponent } from './Core Components/navigation/navigation.component';


@NgModule({
  declarations: [

  
    HeaderComponent,
        FooterComponent,
        NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
