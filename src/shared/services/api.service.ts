import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, catchError } from  'rxjs/operators';



@Injectable({
    providedIn: 'root'
})
export class ApiService {
    apiUrl= 'https://us-central1-atm-backend-2cc1b.cloudfunctions.net/withdraw';

    constructor(private _httpClient: HttpClient) {

    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        }
    } 

    post(body): Observable<any> {
        return this._httpClient.post(`${this.apiUrl}`, body)
            .pipe(
                map(res => res),
                catchError(this.handleError<any[]>()) 
            )
    }
}