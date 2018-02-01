import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, map } from 'rxjs/operators';
import { config } from '../config';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) {}

  getWeatherbyCity(cityName): Observable<any> {

    return this.http.get(`${config.baseUrl}weather?q=${cityName}&units=${config.units}&appid=${config.appId}`)
    .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return new ErrorObservable('WeatherService error');
  }
}
