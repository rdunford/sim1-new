require('dotenv').config();
const express = require('express'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    // cors = require('cors')

    // Controller file
    controller = require('./controller.js')

// Private info
const {
    PORT,
    CONNECTION_STRING
} = process.env

// Begin Server
app = express();
app.use(bodyParser.json());
// app.use(cors());

// Database setup
massive(CONNECTION_STRING).then(db => {
    console.log('database online');
    app.set('db', db)
}).catch(err => console.log('Database error', err));

// Product Endpoints
app.post(`/api/product/`, controller.addProduct)
app.get(`/api/inventory/`, controller.getProducts)
app.get(`/api/inventory/:id`, controller.getProductById)
app.put(`/api/product/:id`, controller.editProduct)
app.delete(`/api/product/:id`, controller.deleteProduct)


app.listen(PORT, console.log(`Sim1 listening on ${PORT}.. ${new Date()}`))