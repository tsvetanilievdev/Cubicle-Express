const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.write('Hello');
    res.end();
})

app.listen(5000, () => console.log('Cubicle is working on port 5000...'));