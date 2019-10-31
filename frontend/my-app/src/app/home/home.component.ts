import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { HttpClient } from '@angular/common/http';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faUserAlt = faUserAlt;
  faHome = faHome;
  weatherData: any;
  tiles;
  dataTEMP;

  constructor(private mainService: MainService, private http: HttpClient) { }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tiles, event.previousIndex, event.currentIndex);
  }


  ngOnInit() {
    this.mainService.getDataFromDB('Legionowo').subscribe(data => {
      //tech
      this.dataTEMP = data;
      this.weatherData = data as [any];
      this.weatherData.icon = data.icon;
    });
    console.log(this.dataTEMP);
    // tslint:disable-next-line: one-variable-per-declaration
    const news = {};
    const weather = {};
    const toDoList = {};
    const calendar = {};

    // tslint:disable-next-line: no-string-literal
    news['type'] = 'news';
    // tslint:disable-next-line: no-string-literal
    weather['type'] = 'weather';
    // tslint:disable-next-line: no-string-literal
    toDoList['type'] = 'toDoList';
    // tslint:disable-next-line: no-string-literal
    calendar['type'] = 'calendar';

    this.tiles = new Array(news, weather, toDoList, calendar);

  }

}
