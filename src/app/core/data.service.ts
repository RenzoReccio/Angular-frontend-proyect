import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable  } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IRestaurant, IComments } from '../share/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  baseUrl: string = 'http://localhost:3000/api';

  getRestaurants(): Observable<IRestaurant[]>{
    return this.http.get<IRestaurant[]>(this.baseUrl + "/restaurant/list")
        .pipe(
          catchError(this.handleError)
        )
  }

  getComments(restaurantId : String) : Observable<IComments[]>{
    return this.http.post<IComments[]>(this.baseUrl + "/comment/list", {restaurantId : restaurantId})
        .pipe(
          catchError(this.handleError)
        )
  }

  saveComments(restaurantId : string, username : string, content : string ){
    var data = {
      restaurantId : restaurantId,
      username : username,
      content : content
    }
    return this.http.post<IComments[]>(this.baseUrl + "/comment/save", data)
          .pipe(
            catchError(this.handleError)
          )
  }

  saveRestaurant(name : string, type : string){
    var data = {
      name : name,
      type : type
    }

    return this.http.post<IRestaurant[]>(this.baseUrl + "/restaurant/save", data)
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
