// FETCH
/*  Es el puente que comunica nuestro front con el back. A diferencia del console.log
es una función asincronica por lo que tarda más en ejecutarse */

//tipos de status

/*  00=> Nunca se realizó la consulta
    100=> Se envió y esta pendiente
    200=> Se respondio bien
    300=> Se está por redireccionar
    400=> Errores en la consulta
    500=> Errores del servidor*/


//Emulamos que el archivo db.json es nuestra API

//Queremos que nos traigan los datos de nuestra API(JSON) y muestre los datos en consola
// Con el primer then accedemos a la respuesta del fetch
/* fetch('./db.json').then((respuesta) =>{
    return respuesta.json()
}).then((data) =>{
    console.log(data)
}) */
// Con segundo then accedemos a la respuesta del json, el cual tambien devuelve una promesa



//EJERCICIO
/* Conectar mediante fetch con un archivo JSON local y cuando reciban la data, ejecutar una funcion llamada 
RenderizarPersonas(listaDePersonas) que nos muestre un div con un h2 donde este el nombre y un h3 donde este el apellido
*/

/* const container = document.getElementById("container")

const renderizarPersonas = (arrayDePersonas) => {
    arrayDePersonas.forEach(persona => {
        container.innerHTML += `
        <div>
            <h2>${persona.nombre}</h2>
            <h3>${persona.apellido}</h3>
        </div>
        `
    })
}

fetch('./db.json').then((respuesta) =>{
    return respuesta.json()
}).then((data) =>{
    renderizarPersonas(data)
}) */


//Consultamos info de la API de star wars 

/* const URL_BASE = "https://swapi.dev/api/" */

/* fetch(URL_BASE + "people/1/")
.then (respuesta => { //la respuesta que voy a obtener es...ver por consola
    console.log(respuesta)//ver si su estado es ok
    return respuesta.json() // retorna la respuesta en su version json
    .then(persona => {
        console.log(persona)

    })
}) */

/* Van a consultar de la SWAPI el siguiente EndPoint
/people (devuelve un objeto donde esta la propiedad results que es un array de objetos con 10 personas)
Generar una funcion que reciba el array y en HTML renderize los datos name (h2) height (span) y mass (span)
*/

//FALTA TERMINAR

const URL_BASE = "https://swapi.dev/api/"

fetch(URL_BASE + "people")
.then (respuesta => { //la respuesta que voy a obtener es...ver por consola
    console.log(respuesta)//ver si su estado es ok
    return respuesta.json() // retorna la respuesta en su version json
    .then(personas => {
        console.log(personas)//muestra toda la data de la API
        console.log(personas.results) // muestra solo el array
    })
})

const container = document.getElementById("container")

const renderizarPersonas = (arrayDePersonas) => {
    arrayDePersonas.forEach(persona => {
        container.innerHTML += `
        <div>
            <h2>${persona.name}</h2>
            <span>${persona.heigth}</span>
            <span>${persona.mass}</span>
        </div>
        `
    })
}