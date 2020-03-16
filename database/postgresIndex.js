const {Client, Pool} = require ('pg');
const format = require('pg-format');

const pool = new Pool({
  host     : 'localhost',
  user     : 'postgres',
  password : 'student',
  port     : 5432,
  database: 'image_render',
  max: 200,
});

pool.connect()
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res.rows[0].now)
})

module.exports.get = (id, callback) => {
  //console.time('query')
  //const queryStr = format('Select products.id, ARRAY_AGG (image) AS image_urls, name, rating FROM images INNER JOIN products ON images.product_id = products.id WHERE products.id = %L GROUP BY products.id;', [id])
  const queryStr = format('Select products.id, image, name, rating FROM images INNER JOIN products ON images.product_id = products.id WHERE products.id = %L;', [id])
    pool.query(queryStr, (err, images) =>{
        if (err) {
            callback(err);
            return;
        } 
        //console.timeEnd('query')
        callback(null, images.rows);
    })
}