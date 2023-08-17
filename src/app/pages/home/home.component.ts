import { Component } from '@angular/core';

import type { IProject } from '@ts/interfaces';

import { projects, technologies } from '@common/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent {
  projects: IProject[] = projects;
  technologies: IProject['stack'] = technologies;
}
