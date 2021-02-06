import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyDC5paOAUlERQHEi8yH-KFBZA27lU0t6_A",
    authDomain: "insta-h-ours.firebaseapp.com",
    projectId: "insta-h-ours",
    storageBucket: "insta-h-ours.appspot.com",
    messagingSenderId: "788153053909",
    appId: "1:788153053909:web:991f319c3ab3288194a85c",
    measurementId: "G-V8N24S5QH9"
  };

let app;
if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}else
{
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth};
    
