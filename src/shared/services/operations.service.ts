import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class OperationsService {

    constructor(private _apiService: ApiService) {

    }

    withdraw(amount) {
        return this._apiService.post(amount)
    }
}