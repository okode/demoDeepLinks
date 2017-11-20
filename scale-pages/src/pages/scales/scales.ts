import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage({ name: 'scales', segment: 'scales/:agentId' })
@Component({
  selector: 'scales-component',
  templateUrl: 'scales.html',
})
export class ScalesComponent {

  agentId: number = 123456789;

  constructor() {
    console.log('ScalesComponent constructor')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScalesComponent');
  }

}
