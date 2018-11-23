let express = require('express');
let controller = require('./controllers/controller');
let compression = require('compression');
let helmet = require('helmet');
let mongoDB = 'mongodb://test:test123@ds121262.mlab.com:21262/doit'
mongoDB = process.env.MONGODB_URI || 'mongodb://test:test123@ds121262.mlab.com:21262/doit'

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
