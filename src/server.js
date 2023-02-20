import dotenv from 'dotenv';
import cors from 'cors';
import { resolve } from 'path';
import express from 'express';
import routes from './routes';

import './database';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/images', express.static(resolve(__dirname, '..', 'uploads', 'images')));
app.use(routes);

app.listen(3333, () => {
  console.log('🔥⚡ Servidor iniciado na porta 3333');
});
