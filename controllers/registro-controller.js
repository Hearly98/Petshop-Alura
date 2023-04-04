import { clientServices } from "../services/client-service.js";

//Escuchar cuando el usuario le de click al boton
const formulario =document.querySelector('[data-form]');

formulario.addEventListener('submit', (evento) => {
    //queremos que no funcione como normalmente deberia
    evento.preventDefault();
    const nombre = document.querySelector('[data-nombre]').value;
    const email =document.querySelector('[data-email]').value;


    
    clientServices
    .crearCliente(nombre,email)
    .then((respuesta) =>{
        window.location.href = "/screens/registro_completado.html";
    })
    .catch((err => console.log(err)));
});