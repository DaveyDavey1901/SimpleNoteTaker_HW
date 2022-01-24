const express = require('express');
const path = require("path");
const nodemon = require('nodemon');

const PORT = process.env.PORT || 5001;
const app = express();

// Body Parser Middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// routes 
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Listening on the port for activity alerts when started
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));





