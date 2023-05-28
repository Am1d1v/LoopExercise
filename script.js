


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

/*

const myArray = [1, true, "Dima", null, false];

for (const element of myArray){
    console.log(element);
}

*/

const people = [
    {name: "Dima", age : 20 },
    {name: "Alice", age: 25 },
    {name: "Anna", age: 15 },
    {name: "Alex", age: 24 },
    {name: "John", age: 30 },
    {name: "Fil", age: 50 }
]

/*

for (element of people){
    console.log(element);
}

*/



/*

people.forEach((person, index) => {
    //console.log(person);
    console.log(`${person.name} has index ${index}`)
})



/*

const newPeople = people.map((person) => {
    console.log(person);
});

*/

/*

const adults = people.filter((person) => {
    if (person.age >=21 ){
        return true
    }
});
console.log(adults);

*/

/*

const adults = people.filter(person => person.age >= 21);
console.log(adults);

*/


//const Dima =  people.find(person => person.name === "Dima");
//console.log(Dima);

/*

const indexDima =  people.findIndex(person => person.name === "Dima");
console.log(indexDima);

const indexAnna =  people.findIndex(person => person.name === "Anna");
console.log(indexAnna);

*/


