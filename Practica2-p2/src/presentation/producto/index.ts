// Practica1/src/presentation/producto/index.ts
import express from 'express';
import { ProductosRoutes } from './routes';

const app = express();
const port = 3002;

app.use('/productos', ProductosRoutes.routes);

app.listen(port, () => {
  console.log(`Servicio Producto running on port ${port}`);
});
