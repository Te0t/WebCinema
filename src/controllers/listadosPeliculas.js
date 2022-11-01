let peliculas = [
  {
    nombre: "wakanda",
    duracion: 120,
    poster: "https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/wakanda.jpg?alt=media&token=c966e9c9-d9d3-41dd-81da-1bd555db9a05",
  },
  {
    nombre: "gato con botas",
    duracion: 130,
    poster: "https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/gatoconbotasnuevo.jpg?alt=media&token=947b7753-2a7f-4492-8a13-7702b85eca72",
  },
  {
    nombre: "mario bros",
    duracion: 150,
    poster: "https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/MARIO%20BROS1.jpg?alt=media&token=b390d998-90e6-4d2e-848c-5d3497152c58",
  },
  {
    nombre: "black adam",
    duracion: 125,
    poster: "https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/Black%20adam%20ultimonuevo.jpg?alt=media&token=eb1d423d-6885-469e-be8b-31d663c3ba74",
  },
  {
    nombre: "erase una vez",
    duracion: 110,
    poster: "https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/ERASE%20UNA%20VEZ%20UN%20GENIO1.jpg?alt=media&token=b451612b-30f9-4d0d-af88-9ed9822006af",
  },
  {
    nombre: "erase una vez",
    duracion: 110,
    poster: "https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/ERASE%20UNA%20VEZ%20UN%20GENIO1.jpg?alt=media&token=b451612b-30f9-4d0d-af88-9ed9822006af",
  },
  {
    nombre: "erase una vez",
    duracion: 110,
    poster: "https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/ERASE%20UNA%20VEZ%20UN%20GENIO1.jpg?alt=media&token=b451612b-30f9-4d0d-af88-9ed9822006af",
  },
  {
    nombre: "erase una vez",
    duracion: 110,
    poster: "https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/ERASE%20UNA%20VEZ%20UN%20GENIO1.jpg?alt=media&token=b451612b-30f9-4d0d-af88-9ed9822006af",
  },
  {
    nombre: "erase una vez",
    duracion: 110,
    poster: "https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/ERASE%20UNA%20VEZ%20UN%20GENIO1.jpg?alt=media&token=b451612b-30f9-4d0d-af88-9ed9822006af",
  },
  {
    nombre: "erase una vez",
    duracion: 110,
    poster: "https://firebasestorage.googleapis.com/v0/b/cinemaharley.appspot.com/o/ERASE%20UNA%20VEZ%20UN%20GENIO1.jpg?alt=media&token=b451612b-30f9-4d0d-af88-9ed9822006af",
  },
  
];


//para traer una etiqueta con el id fila del html
let fila=document.getElementById("fila")

peliculas.forEach(function(pelicula){
  console.log(pelicula);
  //console.log(pelicula.poster)

  let foto=document.createElement("img")
  foto.src=pelicula.poster
  foto.classList.add("img-fluid","w-100")

  fila.appendChild(foto)

})
