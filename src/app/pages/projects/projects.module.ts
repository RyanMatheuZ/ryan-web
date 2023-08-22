import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProjectsComponent } from '@pages/projects/projects.component';
import { ProjectsRouting } from '@pages/projects/projects.routing';

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ProjectsRouting)
  ]
})

export class ProjectsModule { }
