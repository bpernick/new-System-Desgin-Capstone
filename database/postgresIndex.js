const {Client, Pool} = require ('pg');
const format = require('pg-format');


const client = new Client({
  host     : 'localhost',
  user     : 'postgres',
  password : 'student',
  port     : 5432,
  database: 'image_render'
});

client.connect()
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res.rows[0].now)
})

module.exports.get = (id, callback) => {
  const queryStr = format('Select products.id, image, name, rating FROM images INNER JOIN products ON images.product_id = products.id WHERE products.id = %L;', [id])
    client.query(queryStr, (err, images) =>{
        if (err) {
            callback(err);
            return;
        } 
        callback(null, images.rows);
    })
}