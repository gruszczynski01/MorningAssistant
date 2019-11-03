import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  // tslint:disable-next-line: variable-name
  base_url = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

  getWeatherData(city: string): Observable<any> {
    return this.http.get(this.base_url + '/api/v1/getWeather/' + city);
  }
  getNewsData(category: string): Observable<any> {
    return this.http.get(this.base_url + '/api/v1/getNews/' + category);
  }

}
