const express = require('express');
const unitHandlerbars = require('./config/handlebars');
const app = express();

// require('./config/handlebars')(app); вместо --> const unitHandlerbars = require('./config/handlebars'); unitHandlerbars(app);
unitHandlerbars(app);
app.use('/static',express.static('static'))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(5000, () => console.log('Cubicle is working on port 5000...'));