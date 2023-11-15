function add(a,b){
    const total = a + b;
    console.log(a, b);
    if(b > 5){
        const sum = 25 + a + b;
    }
    console.log(sum);
    return total;
}


const arr = [1, 2, 3, 4];
arr.splice(0, arr.length)
console.log(arr)