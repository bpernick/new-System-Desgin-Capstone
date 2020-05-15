const {USERNAME, DB_NAME, PASSWORD} = require ('./config')
const format = require('pg-format')
const { Pool, Client } = require('pg')
const faker = require('faker')

const client = new Client({
  user: process.env.USERNAME,
  host: process.env.DB_NAME,
  password: process.env.PASSWORD,
  database: 'images_render',
})
client.connect()
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
})
let z = 0;
const seedTenMillion = () =>{
  const populateProducts = () => {
    const values = [];
    for (let i = 1; i <= 10000; i++) {
      values.push ([faker.commerce.productName(), faker.random.number(5)])
    }
    const queryStr =  format('INSERT INTO products (name, rating) VALUES %L', values);
    client.query(queryStr, (err, res) => {
      if (err) {
        throw err;
      }
    })
  };
  populateProducts();

  const populateImages = () => {
    const values = [];
    for (let i = 1; i <= 10000; i++) {
      for (let j = 0; j < faker.random.number({'min': 1, 'max': 5}); j++){
        values.push ([faker.image.imageUrl(), i + (z * 10000)])
      }
    }
    const queryStr =  format('INSERT INTO images (image, product_id) VALUES %L', values);
    client.query(queryStr, (err, res) => {
      if (err) {
        throw err;
      }
    })
  };
  populateImages();
  if (z < 1000) {
    console.log('Z is', z);
    z++;
    setTimeout(seedTenMillion, 500);
    
  } else {
    console.log('ALL DONE!')
    client.end();
  }
};

seedTenMillion();