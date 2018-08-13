import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBOY2Q4P_lOc8aUvT5AaWmk-2H8Vsd1OAc',
      authDomain: 'appcompras-854e5.firebaseapp.com'
    });
  }

}
