const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 80;

// Configurar Express para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para servir el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para servir la imagen
app.get('/see-image/:name', (req, res) => {
  const name = req.params.name; 
  res.sendFile(path.join(__dirname, 'public', `${name}.jpg`));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server running on the port ${PORT}`);
});