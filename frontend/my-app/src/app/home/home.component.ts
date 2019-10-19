import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
<<<<<<< HEAD
  data: any;
  dataFromService: any;
  private req: any;
  url = '/getData/';
  constructor(private MainService: MainService, private http: HttpClient) { }
=======
  dataFromService: any;
  constructor(private mainService: MainService, private http: HttpClient) { }
>>>>>>> MA-34



  ngOnInit() {
<<<<<<< HEAD
    this.req = this.http.get(this.url).subscribe(data => {
      console.log(data);
      this.data = data as [any];
    });
    this.MainService.getDataFromDB().subscribe(data => {
      this.dataFromService = data as [any]
    })
=======
    this.mainService.getDataFromDB().subscribe(data => {
      this.dataFromService = data as [any];
    });

>>>>>>> MA-34
  }

}
