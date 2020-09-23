import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import * as firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyC5B_QpAF1MFwK2jCxXRF9dQojEXC8XV4w",
  authDomain: "todoapp-5dc48.firebaseapp.com",
  databaseURL: "https://todoapp-5dc48.firebaseio.com",
  projectId: "todoapp-5dc48",
  storageBucket: "todoapp-5dc48.appspot.com",
  messagingSenderId: "1079822168768",
  appId: "1:1079822168768:web:54ee3bf246bdaaac7f7325",
  measurementId: "G-HPBEQF1KTR"
}); 

firebase.firestore().settings({
  timestampsInSnapshots: true
});

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
