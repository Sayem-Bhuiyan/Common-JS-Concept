/*
Truthy:
1. true
2. any number (+ve, -ve) will be truthy other than 0
3. any string will be truthy even a white space other than empty string 
4. '0' is also truthy cz its now a string
5. empty {} object is truthy
6. empty [] array is truthy

Falsy:
1.false
2. 0
3. '' empty string wil be falsy
4. undefinded is falsy
5. null is falsy
8.

*/ 

let x = [];
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy')
}

// optional
// check falsy
const y = null;
if(!y){
    console.log('value is falsy')
}


// checked true
if(!!x){
    console.log('vlaue is truthy');
}