function validarFormulario(){
    var nombre, apellido, phone, correo;
    nombre = document.getElementById("nombreF");
    correo = document.getElementById("correo");
    apellido = document.getElementById("apellidoF");
    phone = document.getElementById("phone");
   

    if(nombre.value === "" || correo.value === "" || apellido.value === "" || phone.value === ""){
        window.alert("Todos los campos son obligatorios");
        //alert("Todos los campos son obligatorios");
        return false;
    }else{
        if(nombre.value.length >25){
            alert("El nombre es muy largo");
            return false;
        }else{
            if(apellido.value.length >25){
            alert("El usuario es muy largo");
            return false;
            
                }else{
                    if(phone.value.length >8){
                        alert("El número telefónico es muy largo");
                        return false;
                    }
                        else{
                            alert("Mensaje Enviado");
                            document.getElementById("nombreF").value ="";
                            document.getElementById("correo").value="";
                            document.getElementById("apellidoF").value="";
                            document.getElementById("phone").value="";
                            document.getElementById("nombreF").focus();
                            }
                }
                        
            }
        }
}
  

