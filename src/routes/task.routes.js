const express = require('express'); // Requerimos express para controlar las rutas desde este archivo
const router = express.Router();

const TaskModel = require('../models/task'); // Requiere el modelo de datos

router.get('/', async (req, res) => { // Controlamos la ruta inicial del servidor
    //res.send('Bienvenido');
    const tasks = await TaskModel.find(); // Hace una consulta a la base de datos
    //console.log(tasks);
        //.then(tasks => console.log(tasks))
        //.catch(err => console.err(err)); // Buscar en la base de datos
    res.json(tasks);
})

router.post('/', async (req, res) => {
    const { title, description } = req.body; // Acedemos a los datos que envía el navegador
    const task = new TaskModel({title, description});
    await task.save();
    res.json({"status": "Task saved"});
})

router.put('/:id', async (req, res) => {
    const { title, description } = req.body;
    const newTask = { title, description };
    await TaskModel.findOneAndUpdate(req.params.id, newTask);
    res.json({'status': 'Updated'});
})

module.exports = router;