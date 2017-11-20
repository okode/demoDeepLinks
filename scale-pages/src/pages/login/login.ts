import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { ScalesComponent } from '../scales/scales';

@IonicPage({ name: 'login' })
@Component({
  selector: 'login-component',
  templateUrl: 'login.html',
})
export class LoginComponent {

  constructor(private navController: NavController, private scalesComponent: ScalesComponent) { }

  ionViewWillEnter() {
    let header = document.getElementById('header');
    header.className = 'hidden';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginComponent');
  }

  loadScales() {
    this.navController.push('scales', { 'agentId': this.scalesComponent.agentId });
  }

}
