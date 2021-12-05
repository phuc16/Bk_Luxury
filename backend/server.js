const express = require("express");
const cors = require("cors");
var cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

var allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

app.use(allowCrossDomain);

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bkluxury." });
});

require("./app/routes/room.routes.js")(app);
require("./app/routes/account.routes.js")(app);
require("./app/routes/service.routes.js")(app);
require("./app/routes/booking.routes.js")(app);

app.get('/cookie', function(req, res){
  var cookie = req.cookies.name;
  console.log(cookie);
  console.log('a');
  res.cookie('name', 'freetuts.net', { expires: new Date(Date.now() + 900000)});
  res.send('success') 
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});