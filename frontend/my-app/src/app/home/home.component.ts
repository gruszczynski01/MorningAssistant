import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { HttpClient } from '@angular/common/http';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faUserAlt = faUserAlt;
  dataFromService: any;
  constructor(private mainService: MainService, private http: HttpClient) { }



  ngOnInit() {
    this.mainService.getDataFromDB('Legionowo').subscribe(data => {
      this.dataFromService = data as [any];
    });

  }

}
