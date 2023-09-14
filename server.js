require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const dbName = process.env.DATABASE_NAME; // Added variable for the database name
const imageRoutes = require('./routes/imageRoutes'); // Import the image routes

mongoose.connect(`${mongoString}/${dbName}`); // Updated the connection URL
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
//app.use(cors())
app.use(express.json());

const routes = require('./routes/routes');

app.use('/api', routes)
app.use('/uploads', imageRoutes);
app.use('/uploads/images', express.static('uploads/images'));

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})