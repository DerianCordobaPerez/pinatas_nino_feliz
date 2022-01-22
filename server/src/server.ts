import './config/dotenv.config';
import './database';
import { join } from 'path';
import Express from 'express';
import cors from 'cors';
import { engine } from 'express-handlebars';
import helmet from 'helmet';
import methodOverride from 'method-override';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import compression from 'compression';
import passport from 'passport';
import expressFlash from 'express-flash';
import lusca from 'lusca';
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access';
import Handlebars from 'handlebars';
import { error404 } from './libs/error';
import productRoutes from './routes/product.routes';
import userRoutes from './routes/user.routes';
import homeRoutes from './routes/home.routes';
import { flash } from './middlewares/flash';
import { redirect } from './middlewares/redirect';
import { MONGODB_URL } from './config/database.config';

// Create express server
const app = Express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', join(__dirname, 'views'));
app.engine(
  '.hbs',
  engine({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    defaultLayout: 'main',
    layoutsDir: join(app.get('views'), 'layouts'),
    partialsDir: join(app.get('views'), 'partials'),
    extname: '.hbs',
  }),
);
app.set('view engine', '.hbs');

// Middlewares
app.use(Express.static(join(__dirname, 'public')));
app.use(compression());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(
  session({
    secret: process.env.SECRET_SESSION ?? '',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongoUrl: MONGODB_URL }),
  }),
);
app.use(passport.initialize());
app.use(passport.session());
app.use(expressFlash());
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.use(flash);
app.use(redirect);
app.use(cors());
app.use(helmet());

// Routes
app.use('/api/ecommerce/v1/', productRoutes);
app.use('/admin/dashboard/', userRoutes);
app.use('/', homeRoutes);
app.use(error404);

export default app;
