import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(private http: HttpClient) { }

  getDataFromDB(city: string): Observable<any> {
    return this.http.get('/api/v1/getWeather/' + city);
  }
}
