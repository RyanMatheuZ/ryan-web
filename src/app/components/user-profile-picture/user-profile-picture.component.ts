import { Component, Input } from '@angular/core';

import type { IProfilePictureData } from '@ts/interfaces';

@Component({
  selector: 'app-user-profile-picture',
  templateUrl: './user-profile-picture.component.html',
  styleUrls: ['./user-profile-picture.component.scss']
})

export class UserProfilePictureComponent {
  @Input() profilePictureData!: IProfilePictureData;

  defaultImageSize = 150;
}
