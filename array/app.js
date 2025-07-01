// // //an Array is a collection of items
// // //an array can contain any type of data
// // //an array can contain any number of items
// // let myarr = [
// //   "apple",
// //   "banana",
// //   "cherry",
// //   1,
// //   4,
// //   true,
// //   false,
// //   null,
// //   undefined,
// //   NaN,
// //   Infinity,
// //   -Infinity,
// //   [1,3,4],
// // ];

// // // console.log(myarr); // prints the array

// // // console.log(myarr[5])

// // // myarr[7] = 200 // change the value of the 8th item in the array

// // // console.log(myarr)

// // // delete myarr[8]

// // // console.log(myarr)

// // // let length =myarr.length

// // // console.log(length) // prints the length of the array

// // // let str = "hello world"

// // // let arrToStr = myarr.toString()

// // // console.log(arrToStr) // prints the array as a string

// // // let special = myarr.at(2)

// // // console.log(special) // prints the 3rd item in the array

// // // myarr[2] = myarr[2] + " is a fruit" // change the value of the 3rd item in the array
// // // let joined = myarr.join(":next(),\n")
// // // console.log(joined) // prints the array as a string with commas

// // // myarr.pop()

// // // console.log(myarr)
// // // myarr.push("get out")
// // // console.log(myarr)

// // // myarr.shift()
// // // console.log(myarr)
// // // myarr.unshift("new item")
// // // console.log(myarr)

// // // let newArr = myarr.concat(["we","will","we","will","rock","you"])
// // // console.log(newArr)

// // // let arr = [1,2,3,4,5,6]

// // // // arr.flat()
// // // arr.splice(3,0,7000)

// // // let sliced =arr.slice(0,4)
// // // console.log(sliced)

// // // console.log(arr)

// // let arr = ["justice","ball",1,2,3,true,false,null,undefined]

// // console.log(arr)

// // arr[3] = 200

// // console.log(arr)

// // arr.shift()
// // console.log(arr)

// // arr.unshift(100)
// // console.log(arr)

// // arr.push("string of 'get new item'")

// // console.log(arr)

// // arr.pop()

// // console.log(arr)

// // let myArrToString = arr.toString()

// // console.log(myArrToString)

// // let str = arr.join(" -- ")

// // console.log(str)

// // let second = [265,"sd"]

// // let newArr = arr.concat(second)

// // console.log(newArr)

// // newArr.splice(1,0,"string inserted")
// // console.log(newArr)

// // let sliced = newArr.slice(0,3)
// // console.log(sliced)
// // console.log(newArr)

// // console.log(newArr.length)

// //Search methods

// // // indexOf
// // let arr = [1,32,4,"53","df","test","gfd",32,"o"]
// // console.log(arr.indexOf(32))

// // //lastIndexOf
// // console.log(arr.lastIndexOf(32))

// // //include
// // console.log(arr.includes(4))

// // //find

// // let found = arr.find((item)=> typeof(item) == "string")

// // console.log(found)

// // //findLast

// //sort methods

// // let arr = [1,32,4,"53","df","test","gfd",32,"o",true,false,null,undefined,NaN,Infinity,-Infinity]
// let numArr = [1, 0,58064, 542, 7, 4, 390, 32, 53, 265, 1000, 2000, 3000, 4000, 5000]

// // console.log(arr.sort())
// // console.log(numArr.sort((a,b)=> a - b))

// // console.log(arr.reverse())

// // iteration method

// // arr.forEach((item,index)=>{
// //     console.log(index + ': ',item)
// // })

// // const newArr = numArr.map((item)=>{
// //     return item *5
// // })

// // console.log(newArr)

// // const evenArr = numArr.filter((item)=> item % 2 === 0 && item != 0)

// // console.log(evenArr)

// // const strArr = ["hello","men","together","okay","not okay","ouch","Tomorrow","strange"]

// // const longStr = strArr.filter((item) => item.length > 5)

// // console.log(longStr)

// const reduced = numArr.reduce((accumulator,current)=>{
//     console.log(accumulator,current)
//     return accumulator + current
// })

const myArr = [12, "hello", "me", true, 87, "ytr"];

console.log(myArr.find((item) => typeof item == "boolean"));
console.log(
  myArr.findLast((item) => typeof item == "string" && item.length > 3)
);

const numArr = [47, 6, 89, 153, 59, 92, 76, 45, 12];

// let found = numArr.find((item)=> item > 50 && item % 2 == 0)

let evens = numArr.filter((item) => item % 2 == 0);

console.log(evens);

let star = "";

for (i = 0; i < 10; i++) {
    star += `${" ".repeat(10 * i /10 ) + "*".repeat(i)}\n`
}


console.log(star)
