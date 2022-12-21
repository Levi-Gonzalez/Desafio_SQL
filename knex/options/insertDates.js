import { options } from "./mysqlDB.js";
import knex from "knex"

const knexConnection = knex(options);

const cars = [

    {nombre: 'Bmw',  precio:1234, },
    {nombre: 'Audi', precio:456},
    {nombre: 'VW', precio:789},
    {nombre: 'Mercedes Benz', precio:987},
    {nombre: 'Dodge', precio:654}
];

knexConnection('cars').insert(cars)

.then(() => console.log('datos cargados'))
.catch((err)=> {console.log(err); throw err})
.finally(() =>{
    knexConnection.destroy()
})


/*
3°
Ingresaremos los datos para la tabla:
00) copie todo y borre los datos de las columnas
1) Creamos un array de objetos para insertarlo a nuestra base de datos.
2) Invocamos a knex y le especificamos en que tabla vamos a ingresar los datos entonces recibe el nombre de la tabla.
    2_ A) recibe el método insert y recibe el array. -> entonces insertamos el array 
3) Editamos el then y nos dira -> datos cargados. El catch y finally seguiran igual.
4) node insertDates.js
5) vamos al nombre de la tabla creada click derecho > Select rows - Limit 1000
*/