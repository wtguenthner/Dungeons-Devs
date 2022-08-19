




import path from "path";
import express from "express";
// Import express-session
import session from 'express-session'
import exphbs from 'express-handlebars'
import {router} from './controllers/index.js'
import sequelize from './config/connection.js';
import helpers from './public/utils/helpers.js'
import SessionStore from 'connect-session-sequelize';
const SequelizeStore = (SessionStore)(session.Store);
// import db from './models/index.js'

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set('port',process.env.PORT || 3000);

const TWO_HOURS = 1000 * 60 * 60 * 2;

const {
  SESS_NAME = 'sid',
  SESS_SECRET = 'SecretsDont/makeFRIENDS!',
  SESS_LIFETIME = TWO_HOURS
} = process.env

// Set up sessions
const sess = {
  name: SESS_NAME,
  secret: SESS_SECRET,
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
  cookies: {
    maxAge: SESS_LIFETIME,
    sameSite: true,
    secure: true
  }
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use('/',router);

sequelize.sync({ force: false }).then(() => {
  app.listen(process.env.PORT || 3000, () => console.log(`Now listening on ${app.get('port')}`));
});
