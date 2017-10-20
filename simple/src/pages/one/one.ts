import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the OnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'one',
  segment: 'one'
})
@Component({
  selector: 'page-one',
  templateUrl: 'one.html',
})
export class OnePage {

  constructor(public navCtrl: NavController) {}

  goToTwo() {
    this.navCtrl.push('two');
  }

  ionViewWillEnter() {
    console.log('One - Will enter');
  }

  ionViewDidEnter() {
    console.log('One - Did enter');
  }

  ionViewWillLeave() {
    console.log('One - Will leave');
  }

  ionViewDidLeave() {
    console.log('One - Did leave');
  }

}
