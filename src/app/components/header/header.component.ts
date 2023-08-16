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
  navbarItems: NavbarItem[] = [
    {
      label: 'Sobre',
      anchor: '#about'
    },
    {
      label: 'Tecnologias',
      anchor: '#technlogies'
    },
    {
      label: 'Projetos',
      anchor: '#projects'
    }
  ];
}
