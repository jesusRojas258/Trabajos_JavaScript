/* imprimir lista de nombres
crea un programa en javascript que cumpla con lo siguiente:

1. Define una lista de objetos llamado grupo
este objeto debe tener una lista de 10 nombres
separando por nombre y apellido 
2. crea una funcion llamada imprimirNombres
esta funcion debe recorrer la lista de nombres
y mostrarlos en la consola uno a uno
3. llama la funcion imprimirNombres para mostrar
todos los nombres
*/

let grupo = [{
    nombre: "Jesus",
    apellido: "rojas"
}, {
    nombre: "Pedro",
    apellido: "Lizarraga"
},{
    nombre: "gabriel",
    apellido: "rosas"
},{
    nombre: "ernesto",
    apellido: "peña"
},{
    nombre: "juan",
    apellido: "rodriguez"
},{
    nombre: "pablo",
    apellido: "rodriguez"
},{
    nombre: "fernando",
    apellido: "ramirez"
},{
    nombre: "joaquin",
    apellido: "peña"
},{
    nombre: "carlos",
    apellido: "zamorano"
},{
    nombre: "zacarias",
    apellido: "colin"
},
]

function listaNombres(){

    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    for( let i = 0; i < grupo.length; i++ ){
        let li = document.createElement("li");
        li.textContent = grupo[i].nombre + " " + grupo[i].apellido;
        lista.appendChild(li);
    }
}