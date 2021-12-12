// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const morgan = require('morgan');
// const routes = require('./routes/api');
// const path = require('path');
// const app = express();

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, PATCH, DELETE, OPTIONS"
//   );
//   next();
// });

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/api', routes);
// app.use(morgan('dev'));
// app.use('/public', express.static(path.join(__dirname, 'public')));

// mongoose.connect(
//   "mongodb+srv://Gabi:Gabi@rottentomatoes.bmipt.mongodb.net/rottenTomatoes?retryWrites=true&w=majority",
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );

// app.listen(8010, () => {
//     console.log('Running on port 8010')
// });