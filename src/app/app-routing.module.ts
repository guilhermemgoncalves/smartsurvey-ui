import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NewSurveyComponent} from "./pages/new-survey/new-survey.component";
import {ViewSurveyComponent} from "./pages/view-survey/view-survey.component";

const routes: Routes = [
  {path: "", component: NewSurveyComponent},
  {path: "new", component: NewSurveyComponent},
  {path: "view", component: ViewSurveyComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, [RouterModule.forRoot(routes)],
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
