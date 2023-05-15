import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {lastValueFrom} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {SurveyService} from "../../service/survey.service";
import {Survey} from "../../models/survey";

@Component({
  selector: 'app-view-survey',
  templateUrl: './view-survey.component.html',
  styleUrls: ['./view-survey.component.css']
})
export class ViewSurveyComponent implements OnInit {
  surveyId!: number;
  survey!: Survey;

  constructor(
    private activatedRoute: ActivatedRoute,
    private surveyService: SurveyService
  ) {
  }

  async ngOnInit(): Promise<void> {
    await this.getIdByUrl()
    console.log(this.surveyId)
    await this.getSurveyById();
  }

  async getIdByUrl() {
    await this.activatedRoute.params.subscribe(params => {
      console.log(params)
      this.surveyId = params['id']
    });

  }

  async getSurveyById() {
     this.survey = await lastValueFrom(this.surveyService.getSurveyById(this.surveyId));
     console.log(this.survey)
  }
}
