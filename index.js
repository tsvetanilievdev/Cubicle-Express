const express = require('express');
const {engine} = require('express-handlebars');
const app = express();

app.use('/static',express.static('static'))

app.engine('hbs', engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', {layout: false})
})

app.listen(5000, () => console.log('Cubicle is working on port 5000...'));