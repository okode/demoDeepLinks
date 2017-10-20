import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { OnePage } from '../one/one';

@IonicPage({
  name: 'home',
  segment: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToOne() {
    this.navCtrl.push('one');
  }

}
