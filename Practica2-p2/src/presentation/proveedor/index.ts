// Practica1/src/presentation/proveedor/index.ts
import express from 'express';
import { ProveedoresRoutes } from './routes';

const app = express();
const port = 3003;

app.use('/proveedores', ProveedoresRoutes.routes);

app.listen(port, () => {
  console.log(`Servicio Proveedor running on port ${port}`);
});
