import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HeaderModule} from "./component/header/header.module";
import { AppRoutingModule } from './app-routing.module';
import { ViewSurveyComponent } from './pages/view-survey/view-survey.component';
import { NewSurveyComponent } from './pages/new-survey/new-survey.component';
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RatingModule} from "ngx-bootstrap/rating";
import {HttpClientModule} from "@angular/common/http";
import { PieChartComponent } from './component/pie-chart/pie-chart.component';
import { NgApexchartsModule } from "ng-apexcharts";



@NgModule({
  declarations: [
    AppComponent,
    ViewSurveyComponent,
    NewSurveyComponent,
    PieChartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeaderModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    RatingModule.forRoot(),
    FormsModule,
    HttpClientModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
