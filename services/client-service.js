

const crearNuevaLinea= (nombre, email)=>{

    // comillas para poder usar html en js -> ``

    //generar una etiqueta tr
    const linea = document.createElement("tr");
    const contenido =  `
   <td class="td" data-td>
   ${nombre}</td>
   <td>${email}</td>
   <td>
     <ul class="table__button-control">
       <li>
         <a
           href="../screens/editar_cliente.html"
           class="simple-button simple-button--edit"
           >Editar</a
         >
       </li>
       <li>
         <button
           class="simple-button simple-button--delete"
           type="button"
         >
           Eliminar
         </button>
       </li>
     </ul>
   </td>
`;

    linea.innerHTML = contenido;
    return linea; // ya deberia ser el codigo html rellenado con el const contenido
};
//nueva comunicacion entre en front end y backend




//XML HTTP REQUEST => 


//recorrerá todo el arbol del DOM y obtener el elemento data-table
const table =document.querySelector('[data-table]');

const http = new XMLHttpRequest();

//Abrir http, open -> metodo que recibe 2 parametros
/*CRUD -> metodos HTTP
metodos:

Create(crear) -> POST
Read(leer)  -> GET
Update(actualizar) -> PUT/PATCH
Delete(borrar) ->DELETE
*/

const listaClientes = () =>{
    const promise = new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        http.open("GET", "http://localhost:3000/perfil");

        //send -> se va a encargar de enviar la peticion, saldrá del servidor hasta la URL
        http.send();

        http.onload =() => {

            //nueva constante llamada data 
            const response =JSON.parse(http.response); //parse nos ayudará a transformarlo de texto normal a javascript        
            if(http.status>= 400){
                reject(response);
            }else{
                resolve(response);
            }
        };
        });
    return promise
};
//then se ejecuta en caso tenga la informacion, en este caso la data
listaClientes().then((data) =>{
    data.forEach(perfil => {
        const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
         table.appendChild(nuevaLinea);
     });
}).catch((error) => alert("Ocurrió un error"));

//una vez que cargues o termines de recibir esta respuesta va a ejecutarse esta consola




//necesitamos generar la estructura de lista en nuestro archivo js


//console.log(http);