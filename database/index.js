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

module.exports.get = (callback) => {
    connection.query(`Select image, name, rating FROM images INNER JOIN products ON images.product_id = products.id`, (err, images) =>{
        if (err) {
            callback(err);
            return;
        } 
        callback(null, images);
    })
}