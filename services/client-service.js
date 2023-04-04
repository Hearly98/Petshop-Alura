

const http = new XMLHttpRequest();

//Abrir http, open -> metodo que recibe 2 parametros
/*CRUD -> metodos HTTP
metodos:

Create(crear) -> POST
Read(leer)  -> GET
Update(actualizar) -> PUT/PATCH
Delete(borrar) ->DELETE
*/

//Fetch API -> funcion que viene por defecto

const listaClientes = () =>
   fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());//A mi respuesta darle un formato json
  

const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {      //ESTANDAR o archivo recibiremos
      "Content-Type": "application/json"
  },
    body: JSON.stringify({nombre,email, id: uuid.v4()})
});

};

const eliminarCliente = (id) => {
  
  return fetch(`http://localhost:3000/perfil/${id}`,{
    method:"DELETE"
  })
  
}
 
export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
};
//necesitamos generar la estructura de lista en nuestro archivo js
