const express = require('express');
const app = express();

//Ruta Principal
app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

app.get('/login', (req, res) => {
    res.send('Ruta de Login');
} );

app.get('/users', (req, res) => {
    res.send('Ruta de Usuarios');
});

//Con esto levantamos el servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});