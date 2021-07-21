import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LogComponent } from './log/log.component';
import { HttpClientModule} from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {AngularFireDatabaseModule} from '@angular/fire/database';

const config ={
  apiKey: "AIzaSyBSxNFBRlAaDJpIE06ivIhsQBHiteh90mE",
  authDomain: "crop-593a3.firebaseapp.com",
  databaseURL: "https://crop-593a3-default-rtdb.firebaseio.com",
  projectId: "crop-593a3",
  storageBucket: "crop-593a3.appspot.com",
  messagingSenderId: "810055438162",
  appId: "1:810055438162:web:74ae5b649877b84ae6748b",
  measurementId: "G-VC722KGF7R"
}

@NgModule({
  declarations: [
    LogComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, 
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  exports: [
  ]
})
export class LoginModule { }
