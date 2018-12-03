// Archivo de node.js (va a permitir arrancar el servidor)
const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
// Util cuando se hace referencia a un archivo y no se quiere depender del sistema operativo

// Requiere a la conexión con la base de datos
const { mongoose } = require('./database')

// Settings (configuración)
app.set('port', process.env.PORT || 3000)

// Middlewares (Funciones que se ejecutan antes de que lleguen a las rutas)
app.use(morgan('dev')); // Con el parámetro 'dev' permite ver los mensajes como texto
app.use(express.json()) // Necesario para comprobar si el dato es en formato json /_\ reemplaza a bodyParser de antes


// Rutas (URL's del servidor)
app.use('/api/tasks', require('./routes/task.routes')); // Definimos un prefijo inicial


// Static files (le decimos a express dónde irán los archivos estáticos ((archivos html, JavaScript, CSS) = carpeta public)
    // A partir de la constante '__dirname', establecemos la ruta del directorio 'public'
    //console.log(path.join(__dirname, 'public'));
    // __dirname const:  /home/fullstack/Documentos/mern-stack-tasks/src
app.use(express.static(path.join(__dirname, 'public'))); // Lo primero que se hace es enviar el html al cliente


app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});




// Dependencias de desarrollo
// npm i nodemon -D

// "start:dev": "nodemon --exec npm start"
// "start:dev": "nodemon src/index.js"

/**
 * morgan: Permite ver las peticiones que llegan desde el navegador o aplicaciones cliente
 */

 // npm i mongoose: conector con mongodb