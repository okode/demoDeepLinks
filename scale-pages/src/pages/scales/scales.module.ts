import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScalesComponent } from './scales';

@NgModule({
  declarations: [
    ScalesComponent,
  ],
  imports: [
    IonicPageModule.forChild(ScalesComponent),
  ],
  entryComponents: [
    ScalesComponent
  ]
})
export class ScalesModule { }
