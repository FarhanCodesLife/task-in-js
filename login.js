import { signInWithEmailAndPassword,sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./firebaseconfig.js";




let form = document.querySelector('#form')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let forgotPassword = document.querySelector('#forgot')


form.addEventListener('submit',(event)=>{
event.preventDefault()


signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    console.log(user);
    window.location = 'expenses.html'
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage)
  });
})

forgotPassword.addEventListener('click',()=>{
    
    // import { getAuth, sendPasswordResetEmail } from "firebase/auth";
email = prompt('enter your email')
    // const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        alert('reset password email sent!')
        // ..
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        // ..
      });
    
})












// created by Muhammad Farhan 03182127256
