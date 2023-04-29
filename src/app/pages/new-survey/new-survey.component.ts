import {Component} from '@angular/core';
import {SurveyService} from "../../service/survey.service";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-new-survey',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.css']
})
export class NewSurveyComponent {

  categories: string[] = ['Futebol', 'Mercado de trabalho','Musica', 'Polícita', 'Mercado de trabalho', 'Produtos', 'Serviços']

  max = 5;
  rate = 0;
  isReadonly = false;

  constructor(private surveyService : SurveyService) {

  }

  getCategory($event: any) {
    let targer = $event.target
    console.log(targer['value'])
  }
  async Chama(){
    console.log(this.rate)
    console.log(await lastValueFrom(this.surveyService.getAllSurvey()));
  }

}
