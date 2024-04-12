require("dotenv").config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./server/config/db')

const app = express();

const port = process.env.PORT || 3000;

connectDB();

// Set up view engine and layout middleware
app.set('view engine', 'ejs');
app.use(expressLayouts); // Use expressLayouts middleware

// Set the layout file
app.set('layout', './layouts/main'); // Ensure the correct path to your layout file

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/', require('./server/routes/task'));

// 404 Error Handling
app.get('*', (req, res) => {
    res.status(404).render('404');
});

// Start the server
app.listen(port, () => {
    console.log(`App listening to port ${port}`);
});
