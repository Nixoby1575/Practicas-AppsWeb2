// Practica1/src/presentation/categoria/index.ts
import express from 'express';
import { CategoriasRoutes } from './routes';

const app = express();
const port = 3001;

app.use('/categorias', CategoriasRoutes.routes);

app.listen(port, () => {
  console.log(`Servicio Categoría running on port ${port}`);
});
