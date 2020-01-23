import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { HttpClient } from '@angular/common/http';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { moveItemInArray, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { interval } from 'rxjs';
import { Router } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { DomSanitizer } from '@angular/platform-browser';


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
  token: any;
  tiles = [];
  newsIndex = 0;
  currentTime: any;
  calendarUrl: any;


  mainToDoOffset = 0;
  toDoLists: any = [];
  doneLists: any = [];


  // todo = [
  //   'Get to work',
  //   'Pick up groceries',
  //   'Go home',
  //   'Fall asleep'
  // ];

  // done = [
  //   'Get up',
  //   'Brush teeth',
  //   'Take a shower',
  //   'Check e-mail',
  //   'Walk dog'
  // ];


  constructor(private mainService: MainService, private http: HttpClient, private router: Router, public sanitizer: DomSanitizer) { }

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
  photoURL(myUrl: string) {
    return this.sanitizer.bypassSecurityTrustUrl(myUrl);
  }

  ngOnInit() {
    // console.log('token:');
    // console.log(localStorage.getItem('token'));
    // lepsze sprawdzenie to do
    // if (localStorage.getItem('token') === null) {
    //   this.router.navigate(['/login']);
    // }
    // sprawdzenie czy dobry token, pytajac o dane uzytkownika
    this.mainService.getUserInfo().subscribe(data => {
      console.log('pomyslnie zalogowano');
      console.log(data);

    }, (error: any) => {
      this.router.navigate(['/login']);
    });
    this.mainService.getUserTiles().subscribe(data => {
      data.forEach(tile => {
        console.log(tile);
        if (tile.tile_type === 'weather') {
          this.mainService.getWeatherData(tile.category[0]).subscribe(weatherInfo => {
            tile = weatherInfo as [any];
            tile.type = 'weather';
            this.tiles.push(tile);
          });
        } else if (tile.tile_type === 'news') {
          this.mainService.getNewsData(tile.category[0]).subscribe(newsInfo => {
            tile = newsInfo as [any];
            tile.type = 'news';
            this.tiles.push(tile);
          });
        } else if (tile.tile_type === 'todolist') {

          tile.type = tile.tile_type;
          console.log(tile.type);
          tile.offset = this.mainToDoOffset++;
          this.toDoLists.push(tile.category);
          console.log(this.toDoLists[0]);
          this.doneLists.push([]);

          this.tiles.push(tile);
          console.log(this.doneLists[0]);
          console.log(tile.category);
          console.log('l: ' +  this.toDoLists[tile.offset]);
        } else if (tile.tile_type === 'calendar') {
          // tile.category = tile.category[0];
          tile.type = 'calendar';
          this.calendarUrl =  tile.category[0];
          this.tiles.push(tile);
        }
      });
    });


    this.mainService.getNewsData('sports').subscribe(data => {
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

    const toDoList = {};
    const calendar = {};

    // tslint:disable-next-line: no-string-literal
    // toDoList['type'] = 'toDoList';
    // // tslint:disable-next-line: no-string-literal
    // calendar['type'] = 'calendar';

    // this.tiles.push(calendar);
    // this.tiles.push(toDoList);
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
