import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { HttpClient } from '@angular/common/http';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { moveItemInArray, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faUserAlt = faUserAlt;
  faHome = faHome;
  weatherData: any;
  newsData: any;
  tokenData: any;
  tiles;
  dataTEMP;
  newsIndex = 0;
  currentTime;
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];


  constructor(private mainService: MainService, private http: HttpClient) { }

  dropToDo(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tiles, event.previousIndex, event.currentIndex);
  }

  ngOnInit() {
    this.mainService.getToken().subscribe(data => {
      this.tokenData = data as [any];
    });

    this.mainService.getWeatherData('Warszawa', this.tokenData).subscribe(data => {
      this.weatherData = data as [any];
    });

    this.mainService.getNewsData('sports', this.tokenData).subscribe(data => {
      this.newsData = data as [any];

    });
    setInterval(() => {
      this.newsIndex++;
      if (this.newsIndex === 4) { // tu sie bedzie mozna zapiac na ilosc newsow
        this.newsIndex = 0;
      }
    }, 10000);
    setInterval(() => {
      this.currentTime = Date.now();
    }, 1000);

    // tslint:disable-next-line: one-variable-per-declaration
    const news = {};
    const weather = {};
    const toDoList = {};
    const calendar = {};

    // tslint:disable-next-line: no-string-literal
    news['type'] = 'news';
    // tslint:disable-next-line: no-string-literal
    news['class'] = 'small-news-tile';
    // tslint:disable-next-line: no-string-literal
    news['category'] = 'sports';
    // tslint:disable-next-line: no-string-literal
    weather['type'] = 'weather';
    // tslint:disable-next-line: no-string-literal
    weather['class'] = 'small-weather-tile';
    // tslint:disable-next-line: no-string-literal
    weather['city'] = 'Legionowo';
    // tslint:disable-next-line: no-string-literal
    toDoList['type'] = 'toDoList';
    // tslint:disable-next-line: no-string-literal
    calendar['type'] = 'calendar';

    this.tiles = new Array(news, weather, toDoList, calendar);

  }

}
