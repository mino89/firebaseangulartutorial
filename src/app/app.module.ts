import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.router';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';

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
    AppComponent,
    HomeComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
