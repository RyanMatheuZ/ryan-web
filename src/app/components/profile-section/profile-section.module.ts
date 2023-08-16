import { NgModule } from '@angular/core';

import { ProfileSectionComponent } from '@components/profile-section/profile-section.component';
import { UserProfilePictureComponent } from '@components/user-profile-picture/user-profile-picture.component';

@NgModule({
  declarations: [
    ProfileSectionComponent,
    UserProfilePictureComponent
  ],
  exports: [ProfileSectionComponent]
})

export class ProfileSectionModule { }
