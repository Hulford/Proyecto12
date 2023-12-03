import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from '@shared/sideMenu/sidemenu.component';





@Component({
  standalone: true,
  imports: [ RouterModule, SidemenuComponent ],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export default class DashboardComponent {

}
