import multer from 'multer';
import { paths } from '../config/images-path.config';

const storage = multer.diskStorage({
  destination: (req, { fieldname }, callback) => {
    if (!paths[fieldname]) {
      throw new Error('Invalid paths to save images');
    }

    callback(null, paths[fieldname]);
  },
  filename: (req, { originalname }, callback) => callback(null, originalname),
});

const upload = multer({ storage });

export const uploadImage = (name: string) => upload.single(name);

export const uploadImages = (name: string) => upload.array(name);

export const uploadNone = () => upload.none();
