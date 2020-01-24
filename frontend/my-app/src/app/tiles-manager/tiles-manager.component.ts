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
  }

}
