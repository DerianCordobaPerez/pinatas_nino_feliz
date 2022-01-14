import Express from 'express';
import productRoutes from './routes/product.routes';
import './config/dotenv.config';
import './database';

const app = Express();

app.set('port', process.env.PORT || 3000);

app.use(Express.json());

app.use(productRoutes);

export default app;
