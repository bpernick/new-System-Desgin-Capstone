module.exports.nestedArray = (images) => {
    let answer = [[]];
    let id = 1;
    let inner = [];
    
    for (let i = 0; i <=images.length; i++){
        if(i===images.length){
            answer.push(inner);
        }
        else if (images[i].id===id){
            inner.push(images[i])
        }
        else if (images[i].id-id>1){
            while(images[i].id>id){
                answer.push(inner);
                inner = [];
                id++;
            }
        }
        else {
            answer[id] = inner;
            inner = [images[i]];
            id++;
        }
    }
    return answer;
}
