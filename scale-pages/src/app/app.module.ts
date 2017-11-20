import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu';
import { LoginModule } from '../pages/login/login.module';
import { ScalesModule } from '../pages/scales/scales.module';
import { SettingsModule } from '../pages/settings/settings.module';
import { ScalesComponent } from '../pages/scales/scales';

@NgModule({
  declarations: [
    MyApp,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginModule,
    ScalesModule,
    SettingsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    ScalesComponent,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
