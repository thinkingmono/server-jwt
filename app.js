//dotenv dependencie to use env variables.
require('dotenv').config();
//Import dependencie to show errors.
require('express-async-errors');

const express = require('express');
//Create express server.
const app = express();
//Import router
const mainRouter = require('./routes/main')

//Import norfount and main error handler.
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.static('./public'));
app.use(express.json());

//Config main route and pass router routes.
app.use('/api/v1', mainRouter);
//Enable not found and main error handler.
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//Declare server listening port.
const port = process.env.PORT || 3000;

//start function declaration to run server or catch error
const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

//Run start function.
start();
