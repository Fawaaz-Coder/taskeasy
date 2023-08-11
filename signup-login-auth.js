  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import {
     getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut 
    } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCoo0zdQQFH2vqXOS69JiVx0Sde6uhmf0Q",
    authDomain: "taskapp-a5c38.firebaseapp.com",
    databaseURL: "https://taskapp-a5c38-default-rtdb.firebaseio.com",
    projectId: "taskapp-a5c38",
    storageBucket: "taskapp-a5c38.appspot.com",
    messagingSenderId: "1003741300959",
    appId: "1:1003741300959:web:db7b9a06696eacf9b2016a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // Getting input info 

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const signupBtn = document.getElementById("signupBtn");
  const loginBtn = document.getElementById("loginBtn");

  const userSignUp = async() => {
    const signUpEmail = email;
    const signUpPassword = password;
    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert("Signed Up Successfully")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    })
  };
