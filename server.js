const express = require ('express');
const app = express();
const path = require ('path');
const bodyParser = require ('body-parser');
const database = require (path.join (__dirname, 'database', 'index.js'))
const port = 3004;


app.use(express.static(path.join(__dirname, 'dist')));

app.get('/images', (req, res) => {
    database.get((err, images) =>{
        if (err){
            console.log(err);
            res.sendStatus(500);
            return;
        }
        else {
            res.send(images);
        }
    })
})

app.listen (port, () => {console.log(`listening on port ${port}!`)})