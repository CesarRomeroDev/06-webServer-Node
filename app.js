require('dotenv').config();   //variable de entorno
const express = require('express');
const hbs = require('hbs');   //Definimos libreria de Handlebars

const app = express();
const port = process.env.PORT;



//Handlebars.
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');  //Cargamos los parciales desde un solo directorio

//servir contenido estatico.
app.use( express.static('public') );

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Julio César',
    titulo: 'Curso Node'
  });
});
app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Julio César',
    titulo: 'Curso Node'
  });
});
app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Julio César',
    titulo: 'Curso Node'
  });
});

// Cual quier ruta que no coincida '*' manda un error 404;
// app.get('*', (req, res) => {
//     res.sendFile( __dirname + '/public/404.html');
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  })