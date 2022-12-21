export const options = {
    client: 'mysql',
    connection:{
        host: '127.0.0.1',
        user: 'root',
        database: 'miBaseDeDatos1'
    }
}
/*
1°
00_ importamos y en package.json  "type":"module" ,
1_ hacemos un objeto que recibe un parametro client -> SQL
2_ parametro que se conecta con la base de datos
3_ configuramos con los datos del workbench 
3_ a) le damos nombre a nuestra base de datos
3_ b) tenemos que crear en workbench la base de datos con el nombre que especificamos ej: miBaseDeDatos1
3_ c) Ir a la base de datos creada > ir a la parte izq > crear esquema > aplicar > aplizar > finalizar.
3_ d) en caso de modificar el port tenemos que ponerlo, en caso de que no modificamos  no lo ponemos
*/