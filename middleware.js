module.exports.concat = (products) => {
  let answer = products[0];
  let images = [];
  for (i = 0; i < products.length; i ++) {
    images.push(products[i].image);
  }
  answer.images = images;
  delete answer.image;
  return answer;
}
