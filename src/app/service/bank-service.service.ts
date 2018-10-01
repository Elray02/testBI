import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {
  map, catchError
} from 'rxjs/operators';

import {BankDataModel} from '../model/BankData.model';
@Injectable({
  providedIn: 'root'
})
export class BankServiceService {

  apiRoot = 'https://demo.biapi.pro/2.0/banks?stats&expand=logos';
  // apiRoot = 'http://localhost:4200/assets/sampleData.json';

  private headers = new HttpHeaders()
  .set('Accept', 'application/json')
  .set('Accept', '*/*')
  .set('Access-Control-Allow-Origin', '*')
  .set('Content-Type', 'application/json;charset=UTF-8');


  constructor(private http: HttpClient) {}

  doGET(): Observable<BankDataModel[]> {
    console.log('GET');
    return this.http.get(this.apiRoot).pipe(
      map (res => {
        return res['banks'].map( d => {
          return new BankDataModel(
              d.name,
              d.stats,
          );
        });
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
