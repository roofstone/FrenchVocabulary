import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js'

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

const app = initializeApp(firebaseConfig);
console.log("Hallo");

import {getDatabase, ref, child, get, set, update, remove} from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js'
const db = getDatabase();

// reviewForm.addEventListener("submit", AddData());



function printFullName(){
    let firstname=document.getElementById('FirstName').value; 
    let lastname =document.getElementById('LastName').value;
    document.getElementById('output').innerHTML=firstname+ " " +lastname;
}

function AddData(){
               
    let  FirstName=document.getElementById("FirstName");
    let  LastName=document.getElementById("LastName");
    let  id= Date.now();

    console.log(FirstName.value);

    set(ref(db, "reviews/" + id),{
        FirstName: FirstName.value,
        LastName: LastName.value
    }).then(()=>{
        alert("Data added successfully.");
        console.log("No error")
    }).catch(()=>{
        alert("Unsuccessful.");
        console.log(error);
    })

};