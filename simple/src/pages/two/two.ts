import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'two',
  segment: 'two'
})
@Component({
  selector: 'page-two',
  templateUrl: 'two.html',
})
export class TwoPage {

  constructor(public navCtrl: NavController) {}

  goToThree() {
    this.navCtrl.push('three');
  }

}
