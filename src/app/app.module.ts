import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FCM } from '@ionic-native/fcm/ngx'
import * as firebase from 'firebase';
import { HttpClientModule } from '@angular/common/http';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDJYrMa9kjF76LuZvYYePTOMi8jo3Vk4Uk",
  authDomain: "prueba1-notifications.firebaseapp.com",
  databaseURL: "https://prueba1-notifications.firebaseio.com",
  projectId: "prueba1-notifications",
  storageBucket: "",
  messagingSenderId: "939275701828",
  appId: "1:939275701828:web:dd56e82fe9eddd69e27611"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    FCM,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
