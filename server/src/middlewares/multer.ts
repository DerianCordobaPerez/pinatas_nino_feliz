import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, callback) => callback(null, './src/public/images/profile'),
  filename: (req, { originalname }, callback) => callback(null, originalname),
});

const upload = multer({ storage });

export const uploadImage = (name: string) => upload.single(name);

export const uploadImages = (name: string) => upload.array(name);

export const uploadNone = () => upload.none();
