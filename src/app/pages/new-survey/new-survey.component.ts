import {Component, OnInit} from '@angular/core';
import {SurveyService} from "../../service/survey.service";
import {lastValueFrom} from "rxjs";
import {CreateSurvey} from "../../models/create-sruvey";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-new-survey',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.css']
})
export class NewSurveyComponent implements OnInit{

  categories: string[] = ['Futebol', 'Mercado de trabalho', 'Musica', 'Polícita', 'Mercado de trabalho', 'Produtos', 'Serviços']
  formSurvey!: FormGroup;
  max: number = 5;
  rate: number = 0;
  isReadonly = false;
  selectedCategory: string = this.categories[0];
  surveyMessage: string = '';

  constructor(private surveyService: SurveyService, private formBuilder :FormBuilder) {

  }
  ngOnInit(): void {
    this.createSurveyForm(new CreateSurvey())
  }

  getCategory($event: any) {
    let target = $event.target
    this.selectedCategory = target['value'];
  }


  async sendSurvey() {

    console.log(this.formSurvey)
    let surveyResult = await lastValueFrom(this.surveyService.createSurvey(this.formSurvey.value))
    console.log(surveyResult)
  }


  validateForm(): boolean {
    if (this.rate == 0) {
      return true;
    }
    return false;
  }

  private createSurveyForm(survey: CreateSurvey) {
    this.formSurvey = this.formBuilder.group({
      nickName: [survey.nickName],
      surveyMessage: [survey.surveyMessage],
      category: [survey.category],
      rate: [survey.rate]
    })
  }
}
