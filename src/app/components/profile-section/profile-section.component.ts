import { Component } from '@angular/core';

import type { IProfilePictureData } from '@ts/interfaces';

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.scss'],
})

export class ProfileSectionComponent {
  profilePictureData: IProfilePictureData = {
    src: 'assets/medias/me-picture.jpeg',
    userName: 'Ryan Oliveira'
  };
}
