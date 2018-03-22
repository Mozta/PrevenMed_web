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

  var noPacientes = document.getElementById('noPacientes');
  var dbRef = firebase.database().ref().child('NoFolio');
  dbRef.on('value', snap => noPacientes.innerText = snap.val());

  //Get elements
  const btnLogout = document.getElementById('logout-form-submit');

  //Add logout event
  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

}());
