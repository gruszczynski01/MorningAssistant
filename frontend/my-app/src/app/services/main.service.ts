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

  // tslint:disable-next-line: no-shadowed-variable
  getToken(username: string, password: string): Observable<any> {
    // tslint:disable-next-line: object-literal-key-quotes
    const body = { 'username': username, 'password': password };
    return this.http.post(this.base_url + '/api/v1/users/obtain-token', body);
  }

  getUserInfo(): Observable<any> {
    // tslint:disable-next-line: object-literal-key-quotes
    const headers = { 'Authorization': 'Token ' + localStorage.getItem('token') };
    const httpHeaders = new HttpHeaders(headers);
    return this.http.get(this.base_url + '/api/v1/users/me', { headers });
  }
  getUserTiles(): Observable<any> {
    // tslint:disable-next-line: object-literal-key-quotes
    const headers = { 'Authorization': 'Token ' + localStorage.getItem('token') };
    const httpHeaders = new HttpHeaders(headers);
    return this.http.get(this.base_url + '/api/v1/users/tiles', { headers });
  }

  getWeatherData(city: string): Observable<any> {
    // tslint:disable-next-line: object-literal-key-quotes
    const headers = { 'Authorization': 'Token ' + localStorage.getItem('token') };
    const httpHeaders = new HttpHeaders(headers);
    return this.http.get(this.base_url + '/api/v1/weather/' + city, { headers });
  }

  getNewsData(category: string): Observable<any> {
    // tslint:disable-next-line: object-literal-key-quotes
    const headers = { 'Authorization': 'Token ' + localStorage.getItem('token') };
    const httpHeaders = new HttpHeaders(headers);
    return this.http.get(this.base_url + '/api/v1/news/' + category, { headers });
  }


}
