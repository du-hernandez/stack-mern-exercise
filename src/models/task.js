const mongoose = require('mongoose'); // Se requiere para modelar los datos
const { Schema } = mongoose;

// Definimos el esquema

const TaskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
});
// Exporta un modelo de datos (podrá ser accedido desde toda la aplicación)
module.exports = mongoose.model('Task', TaskSchema);