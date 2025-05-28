import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuOption {
  label: string;
  subLabel: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
  styleUrl: './side-menu-options.component.css'
})
export class SideMenuOptionsComponent {

  menuOptions:MenuOption[] =[
    {
      icon:'fa-solid fa-chart-line',
      label:'Trending',
      subLabel:'Gifs Populares',
      route:'/dashboard/trending',
    },
    {
      icon:'fa-solid fa-magnifying-glass',
      label:'buscador',
      subLabel:'Buscar gifs',
      route:'/dashboard/search',
    },
  ];

}
