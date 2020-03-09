import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable  } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IRestaurant } from '../share/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  baseUrl: string = 'assets/';

  getRestaurants(): Observable<IRestaurant[]>{
    return this.http.get<IRestaurant[]>(this.baseUrl + "places.json", )
        .pipe(
          catchError(this.handleError)
        )
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
        const errMessage = error.error.message;
        return Observable.throw(errMessage);
        // Use the following instead if using lite-server
        // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || 'Node.js server error');
  }
}
