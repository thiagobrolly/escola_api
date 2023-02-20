import multer from 'multer';
import multerConfig from '../config/multerConfig';
import Foto from '../models/Foto';

const upload = multer(multerConfig).single('foto');

const FotoController = {
  async store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          erros: [error.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const foto = await Foto.create({ originalname, filename, aluno_id });

        return res.json(foto);
      } catch (e) {
        return res.status(400).json({ erros: ['Aluno não existe.'] });
      }
    });
  },
};

export default FotoController;
