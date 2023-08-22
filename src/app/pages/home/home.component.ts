import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import type { IProject } from '@ts/interfaces';
import type { TTechStack } from '@ts/types';

import { projects, technologies } from '@common/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  projects: ReadonlyArray<IProject> = projects;
  technologies: ReadonlyArray<TTechStack> = technologies;

  constructor(
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Ryan Web - Portfólio');
  }
}
