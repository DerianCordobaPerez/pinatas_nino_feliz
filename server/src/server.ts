import { join } from 'path';
import Express from 'express';
import cors from 'cors';
import { engine } from 'express-handlebars';
import helmet from 'helmet';
import { error404 } from './libs/error';
import headers from './middlewares/headers';
import productRoutes from './routes/product.routes';
import './config/dotenv.config';
import './database';

// Create express server
const app = Express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', join(__dirname, 'views'));
app.engine(
  '.hbs',
  engine({
    defaultLayout: 'main',
    layoutsDir: join(app.get('views'), 'layouts'),
    partialsDir: join(app.get('views'), 'partials'),
    extname: '.hbs',
  }),
);
app.set('view engine', '.hbs');

// Middlewares
app.use(cors());
app.use(helmet());
app.use(headers);
app.use(Express.static(join(__dirname, 'public')));

// Routes
app.use('/api/ecommerce/v1/', productRoutes);
app.use(error404);

export default app;
