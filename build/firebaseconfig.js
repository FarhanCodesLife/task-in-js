
{/* <script type="module"> */}
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBpiQF9yp2q-n1F7ZezuuPrEoz-AgSYgVI",
    authDomain: "expenses-management-sheet.firebaseapp.com",
    projectId: "expenses-management-sheet",
    storageBucket: "expenses-management-sheet.appspot.com",
    messagingSenderId: "176721198778",
    appId: "1:176721198778:web:e5046114644eaaa2110c83",
    measurementId: "G-89YK14MDPS"
  };

  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);

//   const analytics = getAnalytics(app);
// </script>