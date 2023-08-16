import { Component } from '@angular/core';

import type { IProject } from '@ts/interfaces';

import { projects } from '@common/projects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent {
  projects: IProject[] = projects;
}
