import firebase from 'firebase'; 

var firebaseConfig = {
    apiKey: "AIzaSyAskNH9ifOicEHKueWr-W9Yu4PyBMt0M2w",
    authDomain: "music-13388.firebaseapp.com",
    projectId: "music-13388",
    storageBucket: "music-13388.appspot.com",
    messagingSenderId: "980459315182",
    appId: "1:980459315182:web:2ef6b0952e5a6a1dd638ff",
    measurementId: "G-V0QKLR0Q9L"
  };

  var fire = firebase.initializeApp(firebaseConfig);
  export default fire; 