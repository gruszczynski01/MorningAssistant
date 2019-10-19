import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MainService } from './services/main.service';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
=======
import {DragDropModule} from '@angular/cdk/drag-drop';
>>>>>>> MA-34

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule
=======
    HttpClientModule,
    DragDropModule
>>>>>>> MA-34
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
