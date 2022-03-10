const URL_STAR_WARS="https://swapi.dev/api/people";
const URL_SW_IMAGES="https://akabab.github.io/starwars-api/api/all.json"

const getDataFromStarWars = async ()=>{
    const response = await fetch(URL_STAR_WARS);
    const data = await response.json();
    console.log(data.results);//solo para visualizar mientras voy programando despues lo elimino
    getImageFromStarWars(data.results);

};
const getImageFromStarWars = async (actors)=>{
    const response = await fetch(URL_SW_IMAGES);
    const imagenes = await response.json();
    actors.map((actor)=>{
        const resultado=imagenes.filter((imagen)=>imagen.name===actor.name);
        actor.imagenFromAPI=resultado[0].image;
        console.log(resultado)
        console.log(actor)
        
    })
    
    console.log(actors);//solo para visualizar mientras voy programando despues lo elimino
   

};

getDataFromStarWars();

