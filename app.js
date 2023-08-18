
import {app,auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,getAuth, signOut,deleteUser} from "./firbase.js";

  window.onload = ()=>{
      
      window.onload.location("signin.html");
  }

    

// ---------------for Sign-up page---------start here----------

  
  let submit = ()=>{
    let sinUpName = document.getElementById('sinUpName');
    let sinUpPhon = document.getElementById('sinUpPhon');
    let sinUpEmail = document.getElementById('sinUpEmail');
    let sinUpPass = document.getElementById('sinUpPass');
    let sinUpPic = document.getElementById('sinUpPic');



createUserWithEmailAndPassword(auth, sinUpEmail.value, sinUpPass.value)
.then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    sinUpName.value= "";
    sinUpPhon.value= "";
    sinUpEmail.value= "";
    sinUpPass.value= "";
    window.location.replace("signin.html");
   




    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorMessage)

  });

}
// ---------------for Sign-up page---------end here----------


// ---------------for Sign-In page--------start here-----------

let signInEmail = document.getElementById('signIn-mail');
let signInPasswd = document.getElementById('signIn-pass');


let login = ()=>{
    signInWithEmailAndPassword(auth, signInEmail.value, signInPasswd.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      console.log(user)
      window.location.replace("index.html");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error)
    });
  
}
// ---------------for Sign-In page------end here-------------



// ---------------for Logout page------start here-------------

let logout = document.getElementById('logout-page');


logout.addEventListener('click', () => {

    const auth = getAuth();
    signOut(auth).then((res) => {
        console.log(res)
        // Sign-out successful.
        window.location.replace('signin.html')

    }).catch((error) => {
        console.log(res)

        // An error happened.
    });


})


