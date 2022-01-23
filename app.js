const express = require('express');
const path = require("path");
const nodemon = require('nodemon');
const PORT = process.env.PORT || 5001;

const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, "public")));


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));