let express = require('express');
let controller = require('./controllers/controller');

let app = express();

// Template engine
app.set('view engine', 'ejs');

// Middleware
app.use('/assets', express.static('./Public/assets'));

// Connect controller
controller(app)

// Port
app.listen(3000);
console.log('Listening to Port 3000');
