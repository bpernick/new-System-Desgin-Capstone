const express = require ('express');
const app = express();
const path = require ('path');
const bodyParser = require ('body-parser');
const port = 3004;


app.use(express.static(path.join(__dirname, 'dist')));

app.listen (port, () => {console.log(`listening on port ${port}!`)})