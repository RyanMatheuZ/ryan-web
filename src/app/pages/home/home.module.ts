import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProfileSectionModule } from '@components/profile-section/profile-section.module';
import { ProjectCardComponent } from '@components/project-card/project-card.component';
import { TechnologyCardModule } from '@components/technology-card/technology-card.module';
import { TopicSectionComponent } from '@components/topic-section/topic-section.component';

import { HomeComponent } from '@pages/home/home.component';
import { HomeRouting } from '@pages/home/home.routing';

@NgModule({
  declarations: [
    ProjectCardComponent,
    TopicSectionComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ProfileSectionModule,
    TechnologyCardModule,
    RouterModule.forChild(HomeRouting)
  ]
})

export class HomeModule { }
