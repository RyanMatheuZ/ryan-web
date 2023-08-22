import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: async () => (await import('@pages/home/home.module')).HomeModule
  },
  {
    path: 'projects/:slug',
    loadChildren: async () => (await import('@pages/projects/projects.module')).ProjectsModule
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
