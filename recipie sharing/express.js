
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/api', (req, res) => {
    res.json( 'Welcome to the  New port' );
});
app.listen(3000,()=>console.log("server start succesfully"))

