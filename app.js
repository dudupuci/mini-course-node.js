const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// String de conexao mongo mongodb+srv://dudupuci:<password>@clusterapi.u4b7drk.mongodb.net/

const url = 'mongodb+srv://dudupuci:mongodb@clusterapi.u4b7drk.mongodb.net/'
// const options = {
//     reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true
// };

mongoose.connect(url);

mongoose.connection.on('connected', () => {
    console.log('MongoDB has been connected.')
})

mongoose.connection.on('error', (err) => {
    console.log('Connection error with mongodb: '+err)
});

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB has been disconected.')
});


// BODY PARSER
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());


const indexRoute = require('./Routes/index');
const usersRoute = require('./Routes/users');

app.use('/', indexRoute);
app.use('/users', usersRoute)

app.listen(3000);

module.exports = app