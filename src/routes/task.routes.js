const express = require('express'); // Requerimos express para controlar las rutas desde este archivo
const router = express.Router();

const TaskModel = require('../models/task'); // Requiere el modelo de datos

router.get('/', async (req, res) => { // Controlamos la ruta inicial del servidor
    //res.send('Bienvenido');
    const tasks = await TaskModel.find(); // Hace una consulta a la base de datos
    console.log(tasks);
        //.then(tasks => console.log(tasks))
        //.catch(err => console.err(err)); // Buscar en la base de datos

    res.json({
        status: 'Data received!'
    });
})

module.exports = router;