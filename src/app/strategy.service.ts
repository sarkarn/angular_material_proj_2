import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import {IStrategy} from "./strategy"
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StrategyService {

  private _url: string ="/assets/data/strategylist.json"

  constructor(private http: HttpClient) { 

  }

  getStrategies(): Observable<IStrategy[]> {
      return this.http.get<IStrategy[]>(this._url)
  }

  errorHandler(error: HttpErrorResponse) {
      return Observable.throw(error.message);
  }
}
