    //funcion para registrar mesas
    function RegistrarMesas() {
     var db = firebase.firestore();
     var uno = document.getElementById("referencia").value;
     var dos = document.getElementById("tipo").value;
     var tres = document.getElementById("marca").value;
     var cuatro = document.getElementById("modelo").value;
     var cinco = document.getElementById("color").value;
     var seis = document.getElementById("tamanio").value;
     var siete = document.getElementById("response").value;

     //asignandole los campos a la tabla Mesas
     db.collection("Mesas").add({
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
             document.getElementById("response").value = " ";
            
             


         })
         .catch(function(error) {
             console.error("Error adding document: ", error);
         });

 }
 //funcion para registrar los productos
 function RegistrarProductos() {
    var db = firebase.firestore();
    var uno = document.getElementById("referencia").value;
    var dos = document.getElementById("tipo").value;
    var tres = document.getElementById("marca").value;
    var cuatro = document.getElementById("modelo").value;
    var cinco = document.getElementById("vencimiento").value;
    var seis = document.getElementById("tamanio").value;
    var siete = document.getElementById("response").value;

    //asignandole los campos a la tabla Productos
    db.collection("Productos").add({
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
            document.getElementById("vencimiento").value = " ";
            document.getElementById("tamanio").value = " ";
            document.getElementById("response").value = " ";


        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

}


