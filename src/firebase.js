import firebase from 'firebase'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyARXFuhhlMyMmsQ4s7nmO3p4x6awPVV-54",
    authDomain: "image-creator-fbac3.firebaseapp.com",
    databaseURL: "https://image-creator-fbac3.firebaseio.com",
    projectId: "image-creator-fbac3",
    storageBucket: "image-creator-fbac3.appspot.com",
    messagingSenderId: "542064995979",
    appId: "1:542064995979:web:11d542d54be838302cae8e",
    measurementId: "G-N815T8XT98"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase;