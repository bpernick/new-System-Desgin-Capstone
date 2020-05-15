const {Client, Pool} = require ('pg');
const format = require('pg-format');
const {DB_NAME, USERNAME, PASSWORD} = require('./config.js')

const pool = new Pool ({
  host : DB_NAME,
  user : USERNAME,
  password: PASSWORD,
  port : 5432,
  database: 'images_render',
  max: 100
})
// const pool = new Pool({
//   host     : 'localhost',
//   user     : 'postgres',
//   port     : 5433,
//   database: 'images_render',
//   max: 100,
// });

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
// })

module.exports.get = (id, callback) => {
  // console.time('query')
  const queryStr = format('Select products.id, ARRAY_AGG (image) AS image_urls, name, rating FROM images INNER JOIN products ON images.product_id = products.id WHERE products.id = 2 GROUP BY products.id;')
  //const queryStr = format('Explain Analyze Select products.id, image, name, rating FROM images INNER JOIN products ON images.product_id = products.id WHERE products.id = %L;', [id])
    pool.query(queryStr, (err, images) =>{
        if (err) {
            callback(err);
            return;
        } 
        // console.timeEnd('query')
        callback(null, images.rows);
    })
}