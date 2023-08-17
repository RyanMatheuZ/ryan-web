import { NgModule } from '@angular/core';

import { TechnologyCardComponent } from '@components/technology-card/technology-card.component';

import { TechnologyNameFormatterPipe } from '@pipes/technology-name-formatter.pipe';

@NgModule({
  declarations: [
    TechnologyCardComponent,
    TechnologyNameFormatterPipe
  ],
  exports: [TechnologyCardComponent]
})

export class TechnologyCardModule { }
