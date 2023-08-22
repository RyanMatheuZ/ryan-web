import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import type { IProject } from '@ts/interfaces';

import { getFindProjectBySlug, projects } from '@common/index';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  projectBySlug?: IProject;

  directoryBasePath = 'assets/projects/';

  sectionBackgroundColor!: { 'background-color': string };
  lineBackgroundColor!: { 'background-color': string };
  descriptionColor!: { color: string };

  projectLogoSRC!: string;
  projectComputerMockupSRC!: string;
  projectFirstPhoneMockupSRC!: string;
  projectTabletAndPhoneMockupSRC!: string;

  fistDescription!: string;
  secondDescription!: string;
  thirdDescription!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const slug = params['slug'];
      this.projectBySlug = getFindProjectBySlug(projects, slug);

      if (!this.projectBySlug) return this.handleRedirectToHome();

      this.directoryBasePath += `${slug}/`;

      this.title.setTitle(`${this.projectBySlug.title} - Projeto`);

      this.sectionBackgroundColor = { 'background-color': this.projectBySlug.primaryColor };
      this.lineBackgroundColor = { 'background-color': this.projectBySlug.secondaryColor };
      this.descriptionColor = { color: this.projectBySlug.secondaryColor };

      this.projectLogoSRC = `${this.directoryBasePath}logo.svg`;
      this.projectComputerMockupSRC = `${this.directoryBasePath}mockup-computer.png`;
      this.projectFirstPhoneMockupSRC = `${this.directoryBasePath}mockup-phone-1.png`;
      this.projectTabletAndPhoneMockupSRC = `${this.directoryBasePath}mockup-tablet-phone.png`;

      this.fistDescription = this.projectBySlug.description[0];
      this.secondDescription = this.projectBySlug.description[1];
      this.thirdDescription = this.projectBySlug.description[2];
    });
  }

  handleRedirectToHome(): void {
    this.router.navigate(['/home']);
  }
}
