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

  //Get element
  const btnLogout = document.getElementById('logout-form-submit');

  //Add logout event
  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

  //Add a realtime addEventListener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      console.log(firebaseUser);
      // funciona como una redirección HTTP
      //window.location.replace("index_prevenmed.html");
    }
    else{
      console.log('No estas logueado');
      window.location.replace("sign-in.html");
    }
  })
}());
