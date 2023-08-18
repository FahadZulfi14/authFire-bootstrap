import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,deleteUser  } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyBzmIcyfr-4HRakxgQIrYfmIxNRT1Pn3sU",
    authDomain: "signup-fahad.firebaseapp.com",
    projectId: "signup-fahad",
    storageBucket: "signup-fahad.appspot.com",
    messagingSenderId: "189246209527",
    appId: "1:189246209527:web:5f16158dcd3750ed4f42f2"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export {app,auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,getAuth,signOut,deleteUser};