import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TwoPage } from '../two/two';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnePage');
  }

  goToTwo() {
    this.navCtrl.push('two');
  }

}
