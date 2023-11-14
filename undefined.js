/*
    * ways to get undefined
1) variable that will not initialized will give undefined.
2) function with no return will give you undefined
3) parameter that is not passed will be undefined
4. if return has nothing on the right side will return undefined
5. property that doesn't exitsts on an object will give you undefined
6. accessing array elements outside of the index range will give you undefined
7. deleting an element inside an array
8. set a value directry to undefined
*/ 

let first;
// console.log(first)

function second (a, b){
    const total = a + b;
}
const result = second(3, 4);
// console.log(result)

function third(a, b, c, d){
    const total = a + b + c + c;
    console.log(a, b, c, d);
}
// third(2, 5, 6)

function noNegative(a, b){
    if(a<0 || b<0){
        return;
    }
    return a + b;
}
const total = noNegative(2, -5);
// console.log(total)

const fifth = {
    id: 2,
    name: 'ponchom',
    age: 40
}
// console.log(fifth.age, fifth.salary)

const sixth = [3, 4, 5, 2, 8]
// you should no do it. Instead use splice
delete sixth[1]
// console.log(sixth[1], sixth[5], sixth[8])
// console.log(sixth)