const mysql = require ('mysql');
const fs = require ('fs');
const config = require('/Users/ben/Desktop/ben_image_render/config.js');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : config.mySQLpassword,
  database: 'image_render'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});


module.exports.populate = () => {
    fs.readFile (`/Users/ben/Desktop/ben_image_render/database/jsonData.json`, 'utf8', (err, data) => {
        if (err) {
            throw err;
        } else {
            //console.log(JSON.parse(data.slice(1)));
        }
    })
}

module.exports.populate ()