import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  url = '/api/v1/getWeather/Legionowo';
  constructor(private http: HttpClient) { }

  getDataFromDB(): Observable<any> {
    return this.http.get(this.url);
  }
}
