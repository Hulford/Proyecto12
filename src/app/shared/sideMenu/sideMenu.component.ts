import { Component, OnInit } from '@angular/core';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-sideMenu',
  standalone:true,
  templateUrl: './sideMenu.component.html',
  styleUrls: ['./sideMenu.component.css']
})
export class SideMenuComponent  {

  public menuItems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route && route.path)
    .filter((route) => !route.path?.includes(':'));

  constructor() {
    // const dashboardRoutes = routes
    //   .map( route => route.children ?? [] )
    //   .flat()
    //   .filter( route => route && route.path )
    //   .filter( route => !route.path?.includes(':') )
    // console.log(dashboardRoutes);
  }
}
