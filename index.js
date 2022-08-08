require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.SERVER_PORT;
const usersRoutes = require('./routes/usersRoutes.js');
const moviesRoutes = require('./routes/moviesRoutes.js');
const session = require('express-session');
const cors = require('cors') 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//setting session maximum time after inactivity
app.use(session({ secret: 'secret', cookie: { expires: 1200000 }, resave: true, saveUninitialized: true}));
app.use(cors());

app.use('/users', usersRoutes);
app.use( moviesRoutes);


app.listen(port, () => {
    console.log(`Sever Online In Port: ${port}`);
})