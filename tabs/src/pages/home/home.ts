import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

@IonicPage({
  name: 'page',
  segment: 'page'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToContacts() {
    this.navCtrl.push('contact');
  }

}
