import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScalesComponent } from '../../pages/scales/scales';

@Component({
  selector: 'nav-menu-component',
  templateUrl: 'nav-menu.html'
})
export class NavMenuComponent {

  @Input() navController: NavController;

  constructor(private scalesComponent: ScalesComponent) {
    console.log("NavMenu constructor");
  }

  ngOnInit() {
    let url: string = window.location.href;
    // Hack to distinguish between initially loading with vs without deeplink
    if (!(url.includes('settings') || url.includes('scales') || url.includes('login'))) {
      this.loadScales();
    }
    console.log("NavMenuComponent ngOnInit");
  }

  loadLogin() {
    this.navController.push('login');
  }

  loadSettings() {
    this.navController.push('settings');
  }

  loadScales() {
    // TODO: Object gets created again, ¿why?
    this.navController.push('scales', { 'agentId': this.scalesComponent.agentId });
  }

}
