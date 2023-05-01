import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CreateSurvey} from "../models/create-sruvey";

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  url: string = "http://localhost:3001/survey"
  constructor( private http : HttpClient) {

  }

  getAllSurvey(): Observable<any>{
    return this.http.get<Observable<any>>(this.url)
  }

  createSurvey(createSurvey:CreateSurvey): Observable<any>{
    return this.http.post<Observable<CreateSurvey>>(this.url, createSurvey)
  }
}
