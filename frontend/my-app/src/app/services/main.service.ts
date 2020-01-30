import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const user = '';
const password = '';
@Injectable({
  providedIn: 'root'
})
export class MainService {

  loggedUserData: any;

  // tslint:disable-next-line: variable-name
  base_url = 'http://localhost:8000';
  constructor(private http: HttpClient) {}

  // tslint:disable-next-line: no-shadowed-variable
  getToken(username: string, password: string): Observable<any> {
    // tslint:disable-next-line: object-literal-key-quotes
    const body = { username: username, password: password };
    return this.http.post(this.base_url + '/api/v1/users/obtain-token', body);
  }

  getRegister(
    username: string,
    email: string,
    password1: string,
    password2: string
  ): Observable<any> {
    // tslint:disable-next-line: object-literal-key-quotes
    const body = {
      username: username,
      email: email,
      password1: password1,
      password2: password2
    };
    console.log('DANE KTORE IDA DO REQUESTA');
    console.log(body);
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type', 'application/json');
    return this.http.post(this.base_url + '/api/v1/users/register', body, {
      headers: httpHeaders
    });
  }

  getUserInfo(): Observable<any> {
    // tslint:disable-next-line: object-literal-key-quotes
    const headers = { Authorization: 'Token ' + localStorage.getItem('token') };
    const httpHeaders = new HttpHeaders(headers);
    return this.http.get(this.base_url + '/api/v1/users/me', { headers });
  }
  setUserTiles(tiles): Observable<any> {
    // tslint:disable-next-line: object-literal-key-quotes
    const headers = { Authorization: 'Token ' + localStorage.getItem('token') };
    console.log('MOJ TOKEN');
    console.log(headers);
    const httpHeaders = new HttpHeaders(headers);
    httpHeaders.append('Content-Type', 'application/json');
    httpHeaders.append(
      'Authorization',
      'Token ' + localStorage.getItem('token')
    );

    //return this.http.put(this.base_url + "/api/v1/users/me/tiles", { tiles, headers });
    return this.http.put(this.base_url + '/api/v1/users/me/tiles', tiles, {
      headers: headers
    });
    //.put(url, termin, {headers: this.headers})
  }
  getUserTiles(): Observable<any> {
    // tslint:disable-next-line: object-literal-key-quotes
    const headers = { Authorization: 'Token ' + localStorage.getItem('token') };
    const httpHeaders = new HttpHeaders(headers);

    return this.http.get(this.base_url + '/api/v1/users/me/tiles', { headers });
  }

  getWeatherData(city: string): Observable<any> {
    // tslint:disable-next-line: object-literal-key-quotes
    const headers = { Authorization: 'Token ' + localStorage.getItem('token') };
    const httpHeaders = new HttpHeaders(headers);
    return this.http.get(this.base_url + '/api/v1/weather/' + city, {
      headers
    });
  }

  getNewsData(category: string): Observable<any> {
    // tslint:disable-next-line: object-literal-key-quotes
    const headers = { Authorization: 'Token ' + localStorage.getItem('token') };
    const httpHeaders = new HttpHeaders(headers);
    return this.http.get(this.base_url + '/api/v1/news/' + category, {
      headers
    });
  }
}
