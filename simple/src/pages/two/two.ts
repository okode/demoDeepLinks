import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThreePage } from '../three/three';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TwoPage');
  }

  goToThree() {
    this.navCtrl.push('three');
  }

}
