import {  createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./firebaseconfig.js";

let form = document.querySelector('#form')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
// export let fullName = document.querySelector('#user')

// console.log(fullName.value);

form.addEventListener('submit',(event)=>{
    event.preventDefault(),

    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
      alert('you are register')
      window.location = 'index.html'
      // ...
    })
    .catch((error) => {
    //   const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
})



// const auth = getAuth();


  