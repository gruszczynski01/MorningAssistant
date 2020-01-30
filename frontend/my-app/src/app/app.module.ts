import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { MainService } from "./services/main.service";
import { HttpClientModule } from "@angular/common/http";
import { DragDropModule } from "@angular/cdk/drag-drop";
import {
  MatToolbarModule,
  MatMenu,
  MatMenuModule,
  MatDialog,
  MatDialogModule,
  MatSelectModule,
  MatInputModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MatDividerModule } from "@angular/material/divider";
import { FormsModule } from "@angular/forms";
import { TilesManagerComponent } from "./tiles-manager/tiles-manager.component";
import { TextFieldModule } from "@angular/cdk/text-field";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PagenotfoundComponent,
    TilesManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    FontAwesomeModule,
    MatDividerModule,
    FormsModule,
    MatMenuModule,
    MatDialogModule,
    MatSelectModule,
    TextFieldModule,
    MatInputModule
  ],
  entryComponents: [TilesManagerComponent],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule {}
