import express from 'express';
import cors from 'cors';

//importacion de rutas
import postUserRoutes from './routes/postUser.route.js';
import searchFolderRoutes from './routes/searchFolder.route.js';
import loginDomainRoutes from './routes/loginDomain.route.js';

//Definición de rutas
const app = express();

app.use(express.json());
app.use(cors({
  origin: "*"
}));

app.use('/ACS-FIRMAS', postUserRoutes);
app.use('/ACS-FIRMAS', searchFolderRoutes);
app.use('/ACS-FIRMAS', loginDomainRoutes);

export default app;