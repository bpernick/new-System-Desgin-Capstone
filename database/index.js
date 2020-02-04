const mysql = require ('mysql');
const fs = require ('fs');
const path = require('path');
const config = require(path.join(__dirname, 'config.js'));

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : config.mySQLpassword,
  database: 'image_render'
});

// var connection = mysql.createConnection({
//   host     : 'database-2.cupetxxpwjik.us-east-2.rds.amazonaws.com',
//   user     : 'root',
//   password : 'rootroot',
//   port     : 3306,
//   database: 'image_render'
// });

  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });

module.exports.get = (callback) => {
    connection.query(`Select products.id, image, name, rating FROM images INNER JOIN products ON images.product_id = products.id`, (err, images) =>{
        if (err) {
            callback(err);
            return;
        } 
        callback(null, images);
    })
}