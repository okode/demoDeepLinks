import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThreePage } from './three';

@NgModule({
  declarations: [
    ThreePage
  ],
  imports: [
    IonicPageModule.forChild(ThreePage)
  ],
  entryComponents: [
    ThreePage
  ]
})
export class ThreePageModule {}
