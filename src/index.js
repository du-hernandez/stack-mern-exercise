// Archivo de node.js (va a permitir arrancar el servidor)
const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('Server on port 3000');
});