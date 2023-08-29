const express = require('express');
const path = require('path');
const app = express();

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'about.html'));
});

app.get('/bibliography', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'bibliography.html'));
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});


