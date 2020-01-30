import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  firstname: any;
  lastname: any;
  email: any;
  username: any;
  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.firstname = this.mainService.loggedUserData.first_name;
    this.lastname = this.mainService.loggedUserData.last_name;
    this.email = this.mainService.loggedUserData.email;
    this.username = this.mainService.loggedUserData.username;
  }
  saveUserData() {
    console.log('save user data');
  }

}
