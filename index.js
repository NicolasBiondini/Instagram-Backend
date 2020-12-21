const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');


//connect to database
mongoose.connect('mongodb+srv://testuser:292929@prueba.lto8g.mongodb.net/InstagramPrueba?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

//verify connection of DB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB is connected!');
});

//pasar a json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//habilitar routing
app.use('/', routes());


app.listen(3000, () => {
    console.log('Server Listening!')
});