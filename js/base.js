  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCn4cCT71_whIC-D2eajFOVKk6X-g0TWME",
    authDomain: "actividadessatelite.firebaseapp.com",
    databaseURL: "https://actividadessatelite.firebaseio.com",
    projectId: "actividadessatelite",
    storageBucket: "actividadessatelite.appspot.com",
    messagingSenderId: "765405775034"
  };
firebase.initializeApp(config);


// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
// Add a second document with a generated ID.
db.collection("users").add({
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
