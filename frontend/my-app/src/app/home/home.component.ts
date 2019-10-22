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
  dataFromService: any;
  movies = [
    'NEWS',
    'POGODA',
    'TO DO LISTA',
    'KALENDAR'
  ];


  constructor(private mainService: MainService, private http: HttpClient) { }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }


  ngOnInit() {
    this.mainService.getDataFromDB('Łuków').subscribe(data => {
      this.dataFromService = data as [any];
    });

  }

}
