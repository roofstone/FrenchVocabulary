  // Import the functions you need from the SDKs you need



  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js';
  import { getDatabase } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js';
  const database = getDatabase();

  // If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
//   import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js';

  // Add Firebase products that you want to use
//   import { getAuth } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js';
//   import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js';




  const firebaseConfig = {

    apiKey: "AIzaSyARBtT-4j3EiwjhgCBIt0APLW7ToFy7eBA",

    authDomain: "uniquecommentcollector.firebaseapp.com",

    databaseURL: "https://uniquecommentcollector-default-rtdb.europe-west1.firebasedatabase.app",

    projectId: "uniquecommentcollector",

    storageBucket: "uniquecommentcollector.appspot.com",

    messagingSenderId: "335450058601",

    appId: "1:335450058601:web:1dc145ec3fcc86d51a57f8"

  };


  // Initialize Firebase

 // const app = initializeApp(firebaseConfig);

 const app=initializeApp(firebaseConfig);

  // setup variable 
 var  db = getDatabase(app);

  var reviews=document.getElementById("reviews");
  var reviewsRef=db.ref("/reviews");

  reviewForm.addEventListener("submit", e =>{
    var fullName=document.getElementById("fullName");
    var message=document.getElementById("message");
    var hiddenId=document.getElementById("hiddenId");

    var id=hiddenId.value || Date.now();
    db.ref("reviews/"+id).set({
        fullName: fullnName.value,
        message: message.value,
        createAt: firebase.database.ServerValue.TIMESTAMP

    });
  });
