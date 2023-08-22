import { Component, Input, OnInit } from '@angular/core';

import type { IProject } from '@ts/interfaces';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})

export class ProjectCardComponent implements OnInit {
  @Input() project!: IProject;

  logoPath !: string;
  nineStartingTechnologies!: IProject['stack'];
  projectLink!: string;
  backgroundCard !: { 'background-color': string };
  titleColor !: { color: string };

  ngOnInit(): void {
    this.logoPath = `assets/projects/${this.project.slug}/logo.svg`;
    this.nineStartingTechnologies = this.project.stack.slice(0, 9);
    this.projectLink = `/projects/${this.project.slug}`;
    this.backgroundCard = { 'background-color': this.project.primaryColor };
    this.titleColor = { color: this.project.secondaryColor };
  }
}
