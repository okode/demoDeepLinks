import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage({ name: 'settings' })
@Component({
  selector: 'settings-component',
  templateUrl: 'settings.html',
})
export class SettingsComponent {

  constructor() {
    console.log("SettingsComponent constructor");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsComponent');
  }

}
