import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePageModule } from '../pages/home/home.module';
import { OnePageModule } from '../pages/one/one.module';
import { TwoPageModule } from '../pages/two/two.module';
import { ThreePageModule } from '../pages/three/three.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HomePageModule,
    OnePageModule,
    TwoPageModule,
    ThreePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [ ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
