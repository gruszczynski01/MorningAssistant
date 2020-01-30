import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MainService } from '../services/main.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tiles-manager',
  templateUrl: './tiles-manager.component.html',
  styleUrls: ['./tiles-manager.component.css']
})
export class TilesManagerComponent implements OnInit {
  selected = 'news';
  newsCategory = 'sports';
  weatherCity = '';
  calendarLink = '';
  toDoListString = '';
  tiles = [];




  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tiles, event.previousIndex, event.currentIndex);
  }

  constructor(private mainService: MainService, private http: HttpClient, private router: Router) { }

  ngOnInit() {

    this.mainService.getUserTiles().subscribe(data => {
      data.forEach(tile => {
        console.log(tile);
        this.tiles.push(tile);

      });
    });
  }
  addTile() {
    console.log('ADD TILE');
    // tslint:disable-next-line: no-unused-expression
    let newTile = null;
    switch (this.selected) {
      case 'news': {
        console.log('BEDE DODWA NEWS');
        // tslint:disable-next-line: no-unused-expression
        // tslint:disable-next-line: label-position
        newTile = {
          tile_type: 'news',
          category: this.newsCategory
        };
        console.log(newTile);
        this.tiles.push(newTile);
        break;
      }
      case 'weather': {
        console.log('BEDE DODWA weather');
        newTile = {
          tile_type: 'weather',
          category: this.weatherCity
        };
        console.log(newTile);
        this.tiles.push(newTile);
        break;
      }
      case 'calendar': {
        console.log('BEDE DODWA calendar');
        newTile = {
          tile_type: 'calendar',
          category: this.calendarLink
        };
        console.log(newTile);
        this.tiles.push(newTile);
        break;
      }
      case 'todolist': {
        console.log('BEDE DODWA to dolist');
        newTile = {
          tile_type: 'todolist',
          category: this.toDoListString
        };
        console.log(newTile);
        this.tiles.push(newTile);
        break;
      }
      default: {
        console.log('something went wrong');
        break;
      }
    }
  }

}
