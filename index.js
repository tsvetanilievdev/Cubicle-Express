const express = require('express');

const routes = require('./routes');

const app = express();
require('./config/handlebars')(app);

app.use(express.urlencoded({extended:true}))
app.use('/static', express.static('static'));
app.use(routes);

app.listen(5000, () => console.log('Cubicle is working on port 5000...'));

// 1.36 ot videoto