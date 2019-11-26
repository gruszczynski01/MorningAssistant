import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const user = '';
const password = '';
@Injectable({
  providedIn: 'root'
})

export class MainService {
  // tslint:disable-next-line: variable-name
  base_url = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

  getToken(): Observable<any> {
    const body = { 'username': user, 'password': password };
    return this.http.post(this.base_url + '/api/v1/obtain-token', body);
  }

  getWeatherData(city: string): Observable<any> {
    // tslint:disable-next-line: object-literal-key-quotes
    const headers = { 'Authorization': 'Token ' + '9981c29d36cf5d7ef262fa628643c7264702058a' };
    const httpHeaders = new HttpHeaders(headers);
    return this.http.get(this.base_url + '/api/v1/weather/' + city, { headers });
  }

  getNewsData(category: string): Observable<any> {
    // tslint:disable-next-line: object-literal-key-quotes
    const headers = { 'Authorization': 'Token ' + '9981c29d36cf5d7ef262fa628643c7264702058a' };
    const httpHeaders = new HttpHeaders(headers);
    return this.http.get(this.base_url + '/api/v1/news/' + category, { headers });
  }


}
