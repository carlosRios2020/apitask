var contenido = document.querySelector('#contenido');

url = 'https://swapi.co/api/people/';

function traerSwapi() {
datos = {};
$.getJSON(url, datos, function(response){
    console.log(response.results);
     contenido.innerHTML = `
    <p> Bievenido a Swapi - API OFICIAL DE STARWARS </p>  
    <p> Datos que contiene la API </p>   
    <li>Peliculas</li> 
    <li>Planetas </li>  
    <li>Especies </li>  
    <li>Naves Espaciales </li>  
     
    `

})
}


url2 = 'https://swapi.co/api/people/';

function traerPeople() {
datos = {};
$.getJSON(url2, datos, function(response){
    console.log(response.results);
    contenido.innerHTML = `
     <h1>Nombre: ${response.results[0].name}</h1>
     <p>Creado: ${response.results[0].created}</p>
     <p>Statura: ${response.results[0].height}</p>
     <p>Peso: ${response.results[0].mass}</p>
     <p>Color de Pelo: ${response.results[0].hair_color}</p>

     <h1>Nombre: ${response.results[1].name}</h1>
     <p>Creado: ${response.results[1].created}</p>
     <p>Statura: ${response.results[1].height}</p>
     <p>Peso: ${response.results[1].mass}</p>
     <p>Color de Pelo: ${response.results[1].hair_color}</p>

     <h1>Nombre: ${response.results[2].name}</h1>
     <p>Creado: ${response.results[2].created}</p>
     <p>Statura: ${response.results[2].height}</p>
     <p>Peso: ${response.results[2].mass}</p>
     <p>Color de Pelo: ${response.results[2].hair_color}</p>

     <h1>Nombre: ${response.results[3].name}</h1>
     <p>Creado: ${response.results[3].created}</p>
     <p>Statura: ${response.results[3].height}</p>
     <p>Peso: ${response.results[3].mass}</p>
     <p>Color de Pelo: ${response.results[3].hair_color}</p>

     <h1>Nombre: ${response.results[4].name}</h1>
     <p>Creado: ${response.results[4].created}</p>
     <p>Statura: ${response.results[4].height}</p>
     <p>Peso: ${response.results[4].mass}</p>
     <p>Color de Pelo: ${response.results[4].hair_color}</p>

     <h1>Nombre: ${response.results[5].name}</h1>
     <p>Creado: ${response.results[5].created}</p>
     <p>Statura: ${response.results[5].height}</p>
     <p>Peso: ${response.results[5].mass}</p>
     <p>Color de Pelo: ${response.results[5].hair_color}</p>
            
          
    `

})
}
var contenido = document.querySelector('#contenido');

url3 = 'https://swapi.co/api/planets/';

datos = {};

function traerPlanets() {

    $.getJSON(url3,datos, function(response){       
       
            contenido.innerHTML = `

            <h1>Nombre: ${response.results[0].name}</h1>
            <p>Creado: ${response.results[0].created}</p>
            <p>diametro: ${response.results[0].diameter}</p>
            <p>Poblacion: ${response.results[0].population}</p>
            <p>Dias de Año: ${response.results[0].orbital_period}</p>
    
            <h1>Nombre: ${response.results[1].name}</h1>
            <p>Creado: ${response.results[1].created}</p>
            <p>diametro: ${response.results[1].diameter}</p>
            <p>Poblacion: ${response.results[1].population}</p>
            <p>Dias de Año: ${response.results[1].orbital_period}</p>
    
            <h1>Nombre: ${response.results[2].name}</h1>
            <p>Creado: ${response.results[2].created}</p>
            <p>diametro: ${response.results[2].diameter}</p>
            <p>Poblacion: ${response.results[2].population}</p>
            <p>Dias de Año: ${response.results[2].orbital_period}</p>
    
            <h1>Nombre: ${response.results[3].name}</h1>
            <p>Creado: ${response.results[3].created}</p>
            <p>diametro: ${response.results[3].diameter}</p>
            <p>Poblacion: ${response.results[3].population}</p>
            <p>Dias de Año: ${response.results[3].orbital_period}</p>
    
            <h1>Nombre: ${response.results[4].name}</h1>
            <p>Creado: ${response.results[4].created}</p>
            <p>diametro: ${response.results[4].diameter}</p>
            <p>Poblacion: ${response.results[4].population}</p>
            <p>Dias de Año: ${response.results[4].orbital_period}</p>
                   
                       
        `
        })

}

url4 = 'https://swapi.co/api/films/';

function traerFilms() {
datos = {};
$.getJSON(url4, datos, function(response){
    console.log(response.results);

    contenido.innerHTML = `
    <h1>Nombre: ${response.results[0].title}</h1>
    <p>Descripcion: ${response.results[0].opening_crawl}</p>
    <p>Director: ${response.results[0].director}</p>
    <p>Productor: ${response.results[0].producer}</p>
    <p>Extreno en: ${response.results[0].release_date}</p>              
    
    <h1>Nombre: ${response.results[1].title}</h1>
    <p>Descripcion: ${response.results[1].opening_crawl}</p>
    <p>Director: ${response.results[1].director}</p>
    <p>Productor: ${response.results[1].producer}</p>
    <p>Extreno en: ${response.results[1].release_date}</p>

    <h1>Nombre: ${response.results[2].title}</h1>
    <p>Descripcion: ${response.results[2].opening_crawl}</p>
    <p>Director: ${response.results[2].director}</p>
    <p>Productor: ${response.results[2].producer}</p>
    <p>Extreno en: ${response.results[2].release_date}</p>

    <h1>Nombre: ${response.results[3].title}</h1>
    <p>Descripcion: ${response.results[3].opening_crawl}</p>
    <p>Director: ${response.results[3].director}</p>
    <p>Productor: ${response.results[3].producer}</p>
    <p>Extreno en: ${response.results[3].release_date}</p>
    `

})
}

url5 = 'https://swapi.co/api/species/';

function traerSpecies(){

    datos = {};

    $.getJSON(url5, datos, function(response){

        console.log(response.results);
        contenido.innerHTML = `
        <h1>Nombre: ${response.results[0].name}</h1>
        <p>classificacion: ${response.results[0].classification}</p>
        <p>Lenguaje: ${response.results[0].language}</p>
        <p>Color de Piel: ${response.results[0].skin_colors}</p>
        <p>Planeta: ${response.results[0].homeworld}</p>              
        
        <h1>Nombre: ${response.results[1].name}</h1>
        <p>classificacion: ${response.results[1].classification}</p>
        <p>Lenguaje: ${response.results[1].language}</p>
        <p>Color de Piel: ${response.results[1].skin_colors}</p>
        <p>Planeta: ${response.results[1].homeworld}</p> 

        <h1>Nombre: ${response.results[2].name}</h1>
        <p>classificacion: ${response.results[2].classification}</p>
        <p>Lenguaje: ${response.results[2].language}</p>
        <p>Color de Piel: ${response.results[2].skin_colors}</p>
        <p>Planeta: ${response.results[2].homeworld}</p> 

        <h1>Nombre: ${response.results[3].name}</h1>
        <p>classificacion: ${response.results[3].classification}</p>
        <p>Lenguaje: ${response.results[3].language}</p>
        <p>Color de Piel: ${response.results[3].skin_colors}</p>
        <p>Planeta: ${response.results[3].homeworld}</p> 

        <h1>Nombre: ${response.results[4].name}</h1>
        <p>classificacion: ${response.results[4].classification}</p>
        <p>Lenguaje: ${response.results[4].language}</p>
        <p>Color de Piel: ${response.results[4].skin_colors}</p>
        <p>Planeta: ${response.results[4].homeworld}</p>         
               
        `

    })


}

url6 = 'https://swapi.co/api/starships/';

function traerNaves(){

    datos = {};

    $.getJSON(url6, datos, function(response){

        console.log(response.results);
        contenido.innerHTML = `
        <h1>Nombre: ${response.results[0].name}</h1>
            <p>Capacidad: ${response.results[0].passenger}</p>
            <p>Modelo: ${response.results[0].model}</p>
            <p>Clase de Nave: ${response.results[0].starship_class}</p>
            <p>Precio: ${response.results[0].cost_in_credits}</p>  

            <h1>Nombre: ${response.results[1].name}</h1>
            <p>Capacidad: ${response.results[1].passenger}</p>
            <p>Modelo: ${response.results[1].model}</p>
            <p>Clase de Nave: ${response.results[1].starship_class}</p>
            <p>Precio: ${response.results[1].cost_in_credits}</p> 

            <h1>Nombre: ${response.results[2].name}</h1>
            <p>Capacidad: ${response.results[2].passenger}</p>
            <p>Modelo: ${response.results[2].model}</p>
            <p>Clase de Nave: ${response.results[2].starship_class}</p>
            <p>Precio: ${response.results[2].cost_in_credits}</p> 

            <h1>Nombre: ${response.results[3].name}</h1>
            <p>Capacidad: ${response.results[3].passenger}</p>
            <p>Modelo: ${response.results[3].model}</p>
            <p>Clase de Nave: ${response.results[3].starship_class}</p>
            <p>Precio: ${response.results[3].cost_in_credits}</p> 
               
        `

    })


}

