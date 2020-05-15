const format = require('pg-format')
const { Pool, Client } = require('pg')
const faker = require('faker')

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'images_render',
  password: 'student',
  port: 5432,
})
client.connect()
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
})

const addMoreImages = () => {
  let values = [];
  for (let i = 0; i < 5000; i++) {
    values.push([faker.image.imageUrl(), 6]);
  }
  const queryStr =  format('INSERT INTO images (image, product_id) VALUES %L', values);
  client.query(queryStr, (err, res) => {
    if (err) {
      throw err;
    }
  })
};
addMoreImages();