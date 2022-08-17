




import path from "path";
import express from "express";
// Import express-session
import session from 'express-session'
import exphbs from 'express-handlebars'
import {router} from './controllers/index.js'
import sequelize from './config/connection.js';
<<<<<<< HEAD
import helpers from './public/utils/helpers.js'
=======
import helpers from './public/assets/js/helpers.js'
>>>>>>> 9ba214def3b03da5b9436bc7cc54f5a82cad5bf5
// import db from './models/index.js'

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const app = express();
app.set('port',process.env.PORT || 3000);

// Set up sessions
const sess = {
  secret: 'Super secret secret',
  resave: false,
  saveUninitialized: true,
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

// app.get("/utils", (req, res) => {
//   res.sendFile(path.join(__dirname, "utils", "helpers.js"));
// })
sequelize.sync({ force: false }).then(() => {
  app.listen(process.env.PORT || 3000, () => console.log(`Now listening on ${app.get('port')}`));
});
