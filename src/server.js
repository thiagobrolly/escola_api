import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import routes from './routes';
import uploadConfig from './config/multerConfig';

import './database';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/images', express.static(uploadConfig.directory));
app.use(routes);

app.listen(3333, () => {
  console.log('🔥⚡ Servidor iniciado na porta 3333');
});
