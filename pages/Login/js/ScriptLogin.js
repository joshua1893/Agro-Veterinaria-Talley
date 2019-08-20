var usuario = document.getElementById("user");
var password = document.getElementById("contrasena");
var combobox = document.getElementById("cuenta");
var boton = document.getElementById("btnAcceder");

var userAdmin = "Joshua07";
var userCliente = "cliente01";
var userEmpleado = "JeffreySoma";

var passAdmin = "joshua07";
var passCliente = "cliente01";
var passEmpleado = "jeffreysoma";


function ValidarCuenta(){
    if(combobox.value == 'Administrador' && usuario.value == userAdmin && password.value == passAdmin){
      //  alert("usuario correcto");
      redirect("192.168.1.30:5500/pages/Login/HTML/Ejemplo.html");
    //  window.location.href = 'Ejemplo.html';
        
    }else{
        if(combobox.value == 'Cliente' && usuario.value == userCliente && password.value == passCliente){
            alert("usuario correcto");
            
        }else{
            if(combobox.value == 'Empleado' && usuario.value == userEmpleado && password.value == passEmpleado){
                alert("usuario correcto");
                
            }else{

                alert("Los campos estan vacios");
                document.getElementById("user").focus();

            }
        }
    }
   
}






