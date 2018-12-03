// Gestiona la conexión con la base de datos
const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mern-tasks';

mongoose.connect(URI)
.then(()=>{
    console.log("¡Database is conected!")
})
.catch(err => {
    console.error('Error: ', err);
})

module.exports = mongoose;

/**
 * La forma de conectarse al parecer esta 
 */