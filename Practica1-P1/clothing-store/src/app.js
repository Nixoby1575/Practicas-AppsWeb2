
//Recorre y muestra el array por instrucciones de: forEach, forIn y forOf

const products = require('./data/products');

const {
  showProductsWithForEach,
  showProductsWithForIn,
  showProductsWithForOf,
  searchProductByID,
} = require('./functions/funciones');

showProductsWithForEach(products);
showProductsWithForIn(products);
showProductsWithForOf(products);


//Búsqueda de producto


const productID = 6;     //Asignación de ID para búsqueda de producto

searchProductByID(products, productID, (error, product) => {
  if (error) {
    console.error(error);
  } else {
    console.log("\nProducto encontrado por ID:");
    console.log('\x1b[45;34m%s\x1b[0m',`ID: ${product.id}, Nombre: ${product.name}, Precio: $${product.price}, Disponibilidad: ${product.available}`);
  }
});



//POKEAPI  mediante el uso de la librería Superagent


const { getPokemon } = require('./data/getDataPokemon.js');

const idPokemon = 164;

getPokemon(idPokemon)
  .then((nombrePokemon) => {
    console.log('\x1b[31m%s\x1b[0m', '---------------------------------------------------------');

    console.log('\x1b[44;39m%s\x1b[0m', 'Datos del pokemon');
    console.log('Nombre del Pokémon:', nombrePokemon);

    console.log('\x1b[31m%s\x1b[0m', '---------------------------------------------------------');

  })
  .catch((error) => {
    console.error(error);
  });
