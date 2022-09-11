import "firebase/compat/storage"
import "firebase/compat/firestore"
import "firebase/compat/auth"

import firebase from 'firebase/compat/app'


export const app = firebase.initializeApp({
  "projectId": "challenge-inmsa",
  "appId": "1:917316598226:web:18e7e29982037c767c300b",
  "databaseURL": "https://challenge-inmsa-default-rtdb.firebaseio.com",
  "storageBucket": "challenge-inmsa.appspot.com",
  "locationId": "us-central",
  "apiKey": "AIzaSyCLNyZMLA1QotSz_0LQuuOLp8m8_WQLAFw",
  "authDomain": "challenge-inmsa.firebaseapp.com",
  "messagingSenderId": "917316598226"
});

