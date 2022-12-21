import { options } from "./mysqlDB.js";
import knex from "knex"

const knexConnection = knex(options);

knexConnection.schema.createTable('cars' , table =>{   
    table.increments('id')  
    table.string('nombre')  
    table.integer('precio')
})

.then(() => console.log('tabla creada con éxito'))
.catch((err)=> {console.log(err); throw err})
.finally(() =>{
    knexConnection.destroy()
});

/*
2°

importamos options y el módulo de knex. Debemos especificar que mysqlDB es un archivo JS porque no lo pone por default.

1) Debemos conectar este archivo (knex) con el archivo base de datos ('mysql')
2) Tenemos que pasarle los parametros de la base de datos a knex para que NODE.JS se pueda conectar como cliente a lo que es SQL
    2 _ A) Esa configuraciones se alojan en la importacion options, entonces creamos la variable knex y le pasamos options.
3) Creamos la tabla
    3_ A) Le pasamos el método schema: que a su vez tiene otro método que es create table y le pasamos el nombre de la nueva tabla
4) Configuramos la tabla:
    4_ A) Creamos una función que se llamara table
    4_ B) Le agregamos el método increment para que autoincremente y recibe como parametro un string que será el nombre: ID.
    4_ C) El otro campo es para el nombre, como no existe varchar recibe el método string. Recibe su nombre por parametro.
    4_ D) Para el precio si existe el método integer: precio
5) Creamos una promesa, con una funcion que nos diga si la tabla se creo de forma correcta
    5_A) creamos un catch en caso de que haya capturado un error
    5_B) Finally: cierra conexón -> la constante knex recibe el método destroy que cierra la conexión con la base de datos.
6) Tenemos que ejecutar esta linea de código para generar la tabla, levantar el código y crear los campos (id, nombre, precio)
7) Se conectara con workbench y creara esta tabla con estos campos.
8) Moverse a la carpeta raiz donde estan alojados los archivos y poner 'node' (nombre de este archivo) -> node createTable.js
    8_A)Actualizamos > Nombre de la base de datos > nombre de la tabla > calendario del titulo > comprobar que la tabla se creó.
*/