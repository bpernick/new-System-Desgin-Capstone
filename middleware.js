module.exports.nestedArray = (images) => {
    let answer = [[]];
    let id = 1;
    let product = [];
    
    for (let i = 0; i <images.length; i++){
        console.log(i)
        if (images[i].rating === undefined){
            images[i].rating = 3;
        }
        if(i===images.length){
            answer.push(product);
        }
        else if (images[i].id===id){
            product.push(images[i])
        }
        else if (images[i].id-id>1){
            while(images[i].id>id){
                answer.push(product);
                product = [];
                id++;
            }
        }
        else {
            answer[id] = product;
            product = [images[i]];
            id++;
        }
    }
    return answer;
}
