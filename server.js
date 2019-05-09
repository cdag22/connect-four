const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static('client/dist'))


app.listen(port, () => {
  console.log(`Listening on http://localhost${port}`);
})