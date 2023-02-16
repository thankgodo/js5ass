
//1. Update this object with 4 more properties, and using for in loop, print out all key value pairs of the object.
const myObj = {
    fname : "Joe",
    lname: "Shmoe",
    age: 25,
    usrname: "ShmoeJ",
    address: "Lagos",
    hobby: "Coding",
}

const values = Object.values(myObj)
console.log(values.length)
console.log(' ')
for(i=0; i<values.length; i++) {
    console.log(values)
    
}

console.log(' ')
console.log('1. print out of all key value pairs of the object: ',myObj)
document.getElementById("q1").innerHTML = (`1. print out of all key value pairs of the object: ${values}`)



//2. Write out three different object variables and store in an array .
const objVar = {
    fname : "Mike",
    lname: "Ojo",
    age: 25,
}
myArray = Object.values(objVar)
console.log(' ')
console.log ('2. The 3 different object variables stored in an array: ',myArray)

document.getElementById("q2").innerHTML = (`2. The 3 different object variables stored in an array: ${myArray}`)
