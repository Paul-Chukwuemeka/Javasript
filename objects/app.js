//How to create objects

// //object literals
// const myObject = {
//     name:"Jumoke",
//     id: "4rxvigh6363",
// }


// //object constructor

// const myPerson = new Object()

// myPerson.name = "Shoe"


// console.log(myPerson)


// // Accessing properties in an object
// let myName = myObject.name
// let myId = myObject["id"]

// // updating properties in an object
// myObject.name = "Ibukun"
// myObject["id"] = "00000000000000000000"

// // add new property to an object
// myObject.gender = "Female"

// //remove property from object
// delete myObject.gender



// console.log(myName)
// console.log(myId)
// console.log(myObject)


const person = {
  name: 'polycarpilus', age: 50
};


// alert(person.name + " is " + person.age)


// object constructor - This is a way to create an object using a constructor function

const myObject = new Object()

console.log(myObject)



const CustomObject = function(name,age){
  this.name = name
  this.age = age
}

const myCustomObject = new CustomObject("Paul",700)
const myCustomObject3 = new CustomObject("Peter",800)
const myCustomObject4 = new CustomObject("Saul",7700)
const myCustomObject2 = new CustomObject("Pauliu",8700)



console.log(myCustomObject,myCustomObject2,myCustomObject3,myCustomObject4)


//methods in objects

// a method is a function that is a property of an object

const myObject2 = {
  name : "Jumoke",
  age: 30,
  greet : function(){
    console.log("hello,my name is " + this.name, " and I am " + this.age + " years old.")
  }
}

myObject2.class = "Software Engineer"


myObject2.greet()