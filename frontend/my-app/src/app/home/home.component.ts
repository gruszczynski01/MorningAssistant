import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataFromService: any;
  constructor(private mainService: MainService, private http: HttpClient) { }



  ngOnInit() {
    this.mainService.getDataFromDB().subscribe(data => {
      this.dataFromService = data as [any];
    });

  }

}
