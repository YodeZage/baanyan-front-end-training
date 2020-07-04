import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  ReactiveFormComponent,
  TemplateFormComponent
} from './components';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/forms/reactive-form',
  //   pathMatch: 'full'
  // },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent
  },
  {
    path: 'template-form',
    component: TemplateFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormPracticeRoutingModule { }
