  
function showProductsWithForEach(products) {
    console.log("Recorriendo los productos con forEach:");
    products.forEach((product) => {
      console.log(`ID: ${product.id}, Nombre: ${product.name}, Precio: $${product.price}`);
    });
  }
  
  function showProductsWithForIn(products) {
    console.log("\nRecorriendo los productos con for...in:");
    for (const index in products) {
      const product = products[index];
      console.log(`ID: ${product.id}, Nombre: ${product.name}, Precio: $${product.price}`);
    }
  }
  
  function showProductsWithForOf(products) {
    console.log("\nRecorriendo los productos con for...of:");
    for (const product of products) {
      console.log(`ID: ${product.id}, Nombre: ${product.name}, Precio: $${product.price}`);
    }
  }
  
  function searchProductByID(products, id, callback) {
    const productFound = products.find((product) => product.id === id);
    if (productFound) {
      callback(null, productFound);
    } else {
      callback("Producto no encontrado", null);
    }
  }
  
  module.exports = {
    showProductsWithForEach,
    showProductsWithForIn,
    showProductsWithForOf,
    searchProductByID,
  };
  