const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal que sirve el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notas.html'));
});

// Ruta para gestionar los datos del collage (si necesitas más funcionalidades)
app.get('/collage-data', (req, res) => {
    res.json(require('../public/collage.js')); // Devuelve los datos del collage en formato JSON
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});