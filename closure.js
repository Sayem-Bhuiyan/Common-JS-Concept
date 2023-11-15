function kitchen(){
    let roast = 0;
    return function(){
        roast++;
        return roast;
    }
}

let firstServer = kitchen();
// console.log(firstServer());
// console.log(firstServer());
// console.log(firstServer());
// console.log(firstServer());

