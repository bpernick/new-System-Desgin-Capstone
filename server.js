const express = require ('express');
const app = express();
const path = require ('path');
const bodyParser = require ('body-parser');
const database = require (path.join (__dirname, 'database', 'index.js'));
const middleware = require('./middleware');
const cors = require('cors');
const port = 8080;


app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/images', (req, res) => {
    database.get((err, images) =>{
        if (err){
            console.log(err);
            res.sendStatus(500);
            return;
        }
        else {
            //res.setHeader('Access-Control-Allow-Origin', '*');
            res.send(middleware.nestedArray(images));
        }
    })
})

app.listen (port, () => {console.log(`listening on port ${port}!`)})