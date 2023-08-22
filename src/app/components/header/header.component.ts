import { Component } from '@angular/core';

interface NavbarItem {
  label: string;
  anchor: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  baseLink = '/home#';

  navbarItems: NavbarItem[] = [
    {
      label: 'Sobre',
      anchor: `${this.baseLink}about`
    },
    {
      label: 'Tecnologias',
      anchor: `${this.baseLink}technologies`
    },
    {
      label: 'Projetos',
      anchor: `${this.baseLink}projects`
    }
  ];
}
