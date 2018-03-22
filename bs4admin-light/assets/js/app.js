(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCSBppCaJyygI9Wdvgvbb7e1ZLBSbmxKvw",
    authDomain: "appmedica-idit.firebaseapp.com",
    databaseURL: "https://appmedica-idit.firebaseio.com",
    projectId: "appmedica-idit",
    storageBucket: "appmedica-idit.appspot.com",
    messagingSenderId: "952798936791"
  };
  firebase.initializeApp(config);

  //Get elements
  const txtEmail = document.getElementById('login-form-username');
  const txtPassword = document.getElementById('login-form-password');
  const btnLogin = document.getElementById('login-form-submit');
  const btnSignup = document.getElementById('signup-form-submit');
  const btnLogout = document.getElementById('logout-form-submit');

  //Add login event
  btnLogin.addEventListener('click', e => {
    //Get email and password
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    console.log(email);
    console.log(pass);
    //Sign in
    firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  });

  //Add signup event
  btnSignup.addEventListener('click', e => {
    //Get email and password
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //firebase
    firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

  })

  //Add logout event
  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

  //Add a realtime addEventListener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      console.log(firebaseUser);
      // funciona como una redirección HTTP
      window.location.replace("index_prevenmed.html");
    }
    else{
      console.log('No estas logueado');
    }
  })
}());
