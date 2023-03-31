import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IStrategyDetail} from "./strategy-detail"


@Injectable({
  providedIn: 'root'
})
export class StrategyDetailService {

  _url: string ="/assets/data/"

  constructor(private http: HttpClient) { }


  getStrategyDetail(id : number): Observable<IStrategyDetail[]> {
      console.log(this._url);
      return this.http.get<IStrategyDetail[]>(this._url+"strategy"+id+".json")
  }



}
