let express = require('express');
let controller = require('./controllers/controller');
let compression = require('compression');
let helmet = require('helmet');

let app = express();

// Template engine
app.set('view engine', 'ejs');

// Middleware
app.use(helmet());

app.use(compression());

app.use('/assets', express.static('./Public/assets'));

// Connect controller
controller(app)

// Port
app.listen(3000);
