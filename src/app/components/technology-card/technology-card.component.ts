import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology-card',
  templateUrl: './technology-card.component.html',
  styleUrls: ['./technology-card.component.scss']
})

export class TechnologyCardComponent implements OnInit {
  @Input() technologyName!: string;

  technologyIconPath!: string;

  ngOnInit(): void {
    this.technologyIconPath = `assets/projects/techs/${this.technologyName}.svg`;
  }
}
