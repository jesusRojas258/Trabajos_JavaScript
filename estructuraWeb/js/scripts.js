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

const grupo = [{
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

function imprimirNombres(){

    console.log(grupo)
}

imprimirNombres()