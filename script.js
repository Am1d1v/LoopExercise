


/*

for (let i = 0; i < 6; i++){
    console.log(i);
}

*/

/*

const myArray = ['first', 'second', 'third', 10, true];

for (i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}


*/

/*

const myArray = ['first', 'second', 'third', 10, true];

myArray.forEach((element, index) => {
    //console.log(element, index);
    console.log(`Index ${index} has value ${element}`);
})

*/

/*


let i = 0;

while(i < 10){
    console.log(i);
    i++
}

*/

/*

let i = 0;

do {
    console.log(i);
    i++
} while(i < 5);

*/

/*

const user = {
    name: "Dima",
    age: 20,
    some: "thing"
}

for (const key in user){
   // console.log(key);
   // console.log(key, user[key]);
    console.log(`${key} has value ${user[key]}`);
}

*/

/*

const user = {
    name: "Dima",
    age: 20,
}

Object.keys(user).forEach((key, index) =>{
    console.log(key);
    //console.log(`${key} has index ${index}`);
})

*/

//console.log(Object.keys(user));

/*

const user = {
    name: "Dima",
    age: 20,
}

Object.values(user).forEach(key =>{
    console.log(key);
})

*/

//Object.keys({name: "Dima", age: 20});


/*

const keyResults = Object.keys({name: "Dima", age: 20});
console.log(keyResults);

const keyValues = Object.values({name: "Dima", age: 20});
console.log(keyValues);

*/

/*

const myArray = [1, true, "Dima", null, false, ""];

for (const key in myArray){
    //console.log(key);
    console.log(myArray[key]);
}

*/

/*

const myStr = "Hello";

for(const letter of myStr){
    console.log(letter);
}

*/

const myArray = [1, true, "Dima", null, false];

for (const element of myArray){
    console.log(element);
}