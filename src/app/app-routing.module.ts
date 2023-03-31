import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'erw02',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'erw01',
    loadChildren: () => import('./erw01/erw01.module').then( m => m.Erw01PageModule)
  },
  {
    path: 'erw02',
    loadChildren: () => import('./erw02/erw02.module').then( m => m.Erw02PageModule)
  },
  {
    path: 'erwtest',
    loadChildren: () => import('./erwtest/erwtest.module').then( m => m.ErwtestPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
