//funcion para registrar los pedidos
function RegistrarPedidos() {
    var db = firebase.firestore();
    var uno = document.getElementById("referencia").value;
    var dos = document.getElementById("tipo").value;
    var tres = document.getElementById("marca").value;
    var cuatro = document.getElementById("modelo").value;
    var cinco = document.getElementById("color").value;
    var seis = document.getElementById("tamanio").value;
    var siete = document.getElementById("estado").value;
    //asignandole los campos a la tabla pedidos
    db.collection("Pedidos").add({
            uno: uno,
            dos: dos,
            tres: tres,
            cuatro: cuatro,
            cinco: cinco,
            seis: seis,
            siete: siete,
        })
        //vaciando los campos 
        .then(function(docRef) {
            alert("DATOS REGISTRADOS CON EXITO");
            document.getElementById("referencia").value = " ";
            document.getElementById("tipo").value = " ";
            document.getElementById("marca").value = " ";
            document.getElementById("modelo").value = " ";
            document.getElementById("color").value = " ";
            document.getElementById("tamanio").value = " ";


        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

}

//funcion para registrar las reservas
function RegistrarReservas() {
    var db = firebase.firestore();
    var uno = document.getElementById("referencia").value;
    var dos = document.getElementById("tipo").value;
    var tres = document.getElementById("marca").value;
    var cuatro = document.getElementById("modelo").value;
    var cinco = document.getElementById("fecha").value;
    var seis = document.getElementById("hora").value;
    var siete = document.getElementById("color").value;
    var ocho = document.getElementById("tamanio").value;
    var nueve = document.getElementById("adicional").value;
    var dies= document.getElementById("recomendacion").value;
    var once = document.getElementById("estado").value;

    //asignandole los campos a la tabla reservas
    db.collection("Reservas").add({
            uno: uno,
            dos: dos,
            tres: tres,
            cuatro: cuatro,
            cinco: cinco,
            seis: seis,
            siete:siete,
            ocho :ocho,
            nueve :nueve,
            dies:dies,
            once: once,
        })
        //vaciando los campos 
        .then(function(docRef) {
            alert("DATOS REGISTRADOS CON EXITO");
            document.getElementById("referencia").value = " ";
            document.getElementById("tipo").value = " ";
            document.getElementById("marca").value = " ";
            document.getElementById("modelo").value = " ";
            document.getElementById("color").value = " ";
            document.getElementById("tamanio").value = " ";
            document.getElementById("adicional").value= " ";
            document.getElementById("recomendacion").value= " ";
            document.getElementById("fecha").value= " ";
            document.getElementById("hora").value= " ";
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

}


