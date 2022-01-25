const express = require('express');

const unitHandlerbars = require('./config/handlebars');
const routes = require('./routes');

const app = express();

unitHandlerbars(app);

app.use('/static', express.static('static'));
app.use(routes);

app.listen(5000, () => console.log('Cubicle is working on port 5000...'));
