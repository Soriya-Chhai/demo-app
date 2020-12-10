import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'app', pathMatch: 'full'
  },
  {
    path: 'app',
    loadChildren: () => import('./template/template.module').then(m => m.TemplateModule)
  },
  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
