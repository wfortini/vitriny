import * as firebase from 'firebase';
import * as c from "./Constants"

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDLb8cR4me8V9mIyKvIeaEt6YUDYKGMtOE",
    authDomain: "vitriny-29acc.firebaseapp.com",
    databaseURL: "https://vitriny-29acc.firebaseio.com",
    projectId: "vitriny-29acc",
    storageBucket: "vitriny-29acc.appspot.com",
    messagingSenderId: "92258409260"
  };
  firebase.initializeApp(config);

export const database = firebase.database();
export const auth = firebase.auth();
export const provider = new firebase.auth.FacebookAuthProvider();
export const storage = firebase.storage();
