import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsComponent } from './settings';

@NgModule({
  declarations: [
    SettingsComponent,
  ],
  imports: [
    IonicPageModule.forChild(SettingsComponent),
  ],
  entryComponents: [
    SettingsComponent
  ]
})
export class SettingsModule { }
