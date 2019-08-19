function validarRegistro(){
    var nombre, correo, usuario, clave, expresion;
    nombre = document.getElementById("nombre");
    correo = document.getElementById("email");
    usuario = document.getElementById("user");
    clave = document.getElementById("contrasena");
    expresion = /\w+@\w+\.+[a-z]/;

    if(nombre.value === "" || correo.value === "" || usuario.value === "" || clave.value === ""){
        display.alert("Todos los campos son obligatorios");
        return false;
    }else{
        if(nombre.value.length >15){
            //alert("El nombre es muy largo");
            return false;
        }else{
            if(usuario.value.length >20){
            alert("El usuario es muy largo");
            return false;
            }else{
                if(correo.value.length >50){
                    alert("El correo es muy largo");
                    return false;
                    }else{
                        if(!expresion.test(correo)){
                            alert("El correo no es válido");
                            return false;
                        }else{
                            if(clave.value.length >20){
                                alert("La clave es muy largo");
                                return false;
                                }
                        }
                        
                    }
            }
        }
    }


}