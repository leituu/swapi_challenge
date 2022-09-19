const express = require('express');
const apiRouter = require('./routes/apiRoutes');

// instantiate express
const app = express();

const PORT = process.env.PORT || 3000;

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log('Server started on port 3000');
});
