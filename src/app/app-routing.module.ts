import { NgModule } from '@angular/core';
import { Routes, RouterModule, LoadChildren } from '@angular/router';
import { ViewerComponent } from './viewer/viewer.component';
import { environment } from '../environments/environment';

const routes: Routes = [
  { path: '', loadChildren: () => import('./gkd/gkd.module').then(m => m.GkdModule) },
  { path: 'official', loadChildren: () => import('./index/index.module').then(m => m.IndexModule) },
  /*{
    path: '', loadChildren: ()=> environment.official?import('./index/index.module').then(m => m.IndexModule)
      :import('./index-local/index-local.module').then(m => m.IndexLocalModule)
  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
