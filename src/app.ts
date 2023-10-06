import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Función para crear un producto
async function createProduct(nombre: string, precio: number, categoriaId: number, proveedorId: number) {
  const nuevoProducto = await prisma.producto.create({
    data: {
      nombre: nombre,
      precio: precio,
      categoriaId: categoriaId,
      proveedorId: proveedorId,
    },
  });
  return nuevoProducto;
}

// Función para leer un producto por ID
async function getProductById(id: number) {
  const producto = await prisma.producto.findUnique({
    where: { id: id },
  });
  return producto;
}

// Función para actualizar un producto
async function updateProduct(id: number, nombre: string, precio: number, categoriaId: number, proveedorId: number) {
  const productoActualizado = await prisma.producto.update({
    where: { id: id },
    data: {
      nombre: nombre,
      precio: precio,
      categoriaId: categoriaId,
      proveedorId: proveedorId,
    },
  });
  return productoActualizado;
}

// Función para eliminar un producto por ID
async function deleteProduct(id: number) {
  const productoEliminado = await prisma.producto.delete({
    where: { id: id },
  });
  return productoEliminado;
}

// Función principal para realizar una inserción de datos
async function main() {
  // Crear un nuevo producto
  const nuevoProducto = await createProduct('Producto de Ejemplo', 19.99, 1, 1);
  console.log('Producto creado:', nuevoProducto);

  // Leer el producto por ID
  const productoLeido = await getProductById(nuevoProducto.id);
  console.log('Producto leído:', productoLeido);

  // Actualizar el producto
  const productoActualizado = await updateProduct(nuevoProducto.id, 'Producto Actualizado', 29.99, 2, 2);
  console.log('Producto actualizado:', productoActualizado);

  // Eliminar el producto
  const productoEliminado = await deleteProduct(nuevoProducto.id);
  console.log('Producto eliminado:', productoEliminado);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
