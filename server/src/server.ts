import Express from 'express';
import productRoutes from './routes/product.routes';
import cors from 'cors';
import headers from './middlewares/headers';
import './config/dotenv.config';
import './database';

const app = Express();

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(headers);

app.use('/api/v1/', productRoutes);

export default app;
