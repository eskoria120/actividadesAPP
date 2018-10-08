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


var db = firebase.firestore();

//autenticacion con google
btnloginGoogle.addEventListener('click', e =>{
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
  //alert("te haz logueado con exito" + user.displayName);
  swal('te haz logueado con exito ' + user.displayName)
  btnloginGoogle.innerHTML = "bienvenido: " + user.displayName;
  document.getElementById("formulario").style.display = "block";
  document.getElementById("salir").style.display = "block";
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
  });
});
//funcion para salir
salir.addEventListener('click', e =>{
  firebase.auth().signOut().then(function() {
  // Sign-out successful.
  //alert("haz salido de la app");
  swal('haz salido de la app')
  document.getElementById("formulario").style.display = "none";
  document.getElementById("salir").style.display = "none";
  btnloginGoogle.innerHTML = "login con Google.";
}).catch(function(error) {
  // An error happened.
});
})


//funcion para evitar comportamiento por defaul del boton del formulario
document.getElementById("boton").addEventListener("click", function(event){
    event.preventDefault()
});


//funcion para guardar el formulario en la base de datos.
function miFormulario(){



	var fecha = document.getElementById('fecha').value;

	var area = document.getElementById('area').value;
    if (area === "") {
      swal('no puedes guardar sin completar los datos')
  };
	var servicio = document.getElementById('servicio').value;
    if (servicio === "") {
      swal('no puedes guardar sin completar los datos')
  };  
	var horainicio = document.getElementById('horainicio').value;
    if (horainicio === "") {
      swal('no puedes guardar sin completar los datos')
  };  
	var horafin = document.getElementById('horafin').value;
    if (horafin === "") {
      swal('no puedes guardar sin completar los datos')
  };  
  var observaciones = document.getElementById('observaciones').value;
    if (observaciones === "") {
      swal('no puedes guardar sin completar los datos')
  };  


// Add a second document with a generated ID.
      db.collection("actividadDelDia").add({
          fecha: fecha,
          area: area,
          servicio: servicio,
          horainicio: horainicio,
          horafin: horafin,
          observaciones: observaciones
      })
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
              swal({
              position: 'top-end',
              type: 'success',
              title: 'Tu trabajo se ha guardado.',
              showConfirmButton: false,
              timer: 1500
            })
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });

      document.getElementById("formulario").reset();        
}
