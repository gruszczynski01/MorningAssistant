import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const user='';
const password='';
var token1 = '';
@Injectable({
  providedIn: 'root'
})

export class MainService {
  // tslint:disable-next-line: variable-name
  base_url = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

  setToken(token: string){
    token1 = token;
  }

  getToken(): Observable<any> {
    const body = {'username': user, 'password': password}
    return this.http.post(this.base_url + '/api/v1/obtain-token', body);
  }

  getWeatherData(city: string): Observable<any> {
    const headers = {'Authorization': 'Token' + token1}
    console.log("POgoDA")
    console.log("POGODA: " + token1);
    const httpHeaders = new HttpHeaders (headers);
    return this.http.get(this.base_url + '/api/v1/weather/' + city,  {headers});
  }

  getNewsData(category: string): Observable<any> {
    const headers = {'Authorization': 'Token' + token1}
    console.log("NEWS: " + token1);
    const httpHeaders = new HttpHeaders (headers);
    return this.http.get(this.base_url + '/api/v1/news/' + category, {headers});
  }


}
