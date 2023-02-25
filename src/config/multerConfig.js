import multer from 'multer';
import { extname, resolve } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

const tmpFolder = resolve(__dirname, '..', '..', 'uploads', 'images');

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPEG'));
    }

    return cb(null, true);
  },

  directory: tmpFolder,

  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, tmpFolder);
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
