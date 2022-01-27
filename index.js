const express = require('express');

const routes = require('./routes');
const config = require('./config/config.json')[process.env.NODE_ENV || 'development'];
console.log(process.env.NODE_ENV)
const app = express();
require('./config/handlebars')(app);

app.use(express.urlencoded({extended:true}))
app.use('/static', express.static('static'));
app.use(routes);

app.listen(config.PORT, () => console.log(`Cubicle is working on port ${config.PORT}...`));

// 1.36 ot videoto