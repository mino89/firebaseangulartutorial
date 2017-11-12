import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';

// firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD-seV1mWNyJOtDlLCSudD8gPVTq7xxARk',
  authDomain: 'firestore-cfd51.firebaseapp.com',
  databaseURL: 'https://firestore-cfd51.firebaseio.com',
  projectId: 'firestore-cfd51',
  storageBucket: '',
  messagingSenderId: '1098103080669'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
