import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'template', component: TemplateDrivenFormComponent },
  { path: 'reactive', component: ReactiveFormComponent },
  { path: '**', component: PageNotFoundComponent } // Wildcard route for 404
];
