//ingreso de usuarios//
function signin() {

    event.preventDefault();
    var user = document.getElementById("email").value;
    var pass = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(user, pass)
        .then(function(result) {
            alert("Inicio de Sesion Correcto");
            contenido()
        })
        .catch(function(error) {
            alert("usuario o contraseña incorrectas");


            // ...
        });

}

function contenido() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            var Usuario = document.getElementById("email").value;
            //mientras el usuario ingresado sea el administrador
            if (Usuario == "torres2017252013@unitropico.edu.co") {
                window.location = "admin/inicio.html";
            } else {
                window.location = "user/inicio.html";
            }
        }
    });
}

//registro de usuarios//
function signUp() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(result) {
            alert("Usuario Registrado");
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
        })

    .catch(function(error) {

        alert("Usuario no se registro");
    });
}

//cerrar sesión de usuarios//
function cerrar() {
    firebase.auth().signOut()
        .then(function() {
            alert("sesión cerrada");
            window.location = "../index.html";
        })
        .catch(function(error) {
            alert("sesión no cerrada");
        })
}