import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

import { Auth } from './guards/auth.guard';
import { FetchDataResolver } from './resolvers/fetch-data.resolver';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FirstPracticeComponent } from './components/first-practice/first-practice.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/first-practice',
    pathMatch: 'full'
  },
  {
    path: 'first-practice',
    component: FirstPracticeComponent
  },
  {
    path: 'forms',
    component: FormComponent,
    canActivate: [Auth],
    resolve: {
      data: FetchDataResolver
    },
    loadChildren: () => import('../forms/form-practice.module').then(m => m.FormPracticeModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    FirstPracticeComponent,
    FormComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false,
      }
    ),
    CoreModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
