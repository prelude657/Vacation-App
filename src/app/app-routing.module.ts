import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'greece',
    loadChildren: () => import('./greece/greece.module').then( m => m.GreecePageModule)
  },
  {
    path: 'colombia',
    loadChildren: () => import('./colombia/colombia.module').then( m => m.ColombiaPageModule)
  },
  {
    path: 'hawaii',
    loadChildren: () => import('./hawaii/hawaii.module').then( m => m.HawaiiPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
