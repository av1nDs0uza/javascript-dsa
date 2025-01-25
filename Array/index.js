// HOw do you create an empty array in javascript?

const arr = [1,2,3,4, "Hello", {name:"Avin"}, [1,2,3]];

console.log(arr);

const firstElement = arr[0];
const arrLength = arr.length;
const lastElement = arr[arrLength -1];
console.log(firstElement,arrLength, lastElement);


// how do you remove last element from array?

const lastElement1 = arr.pop();
console.log(arr, lastElement1);

// how do you loop through an array in javascript?

for(let i=0; i<arr.length;i++){
    console.log(arr[i])
}

arr.forEach((x,i) =>{
    console.log(x);
})

for(let x of arr){
    console.log(x);
}


// Q1: How do you check if an element exists in an array?

const findElement = (arr, target) => {
    for(let x in arr){
        if(x === target){
            return true;
        }
    }
    return false;
}

console.log(findElement(arr,"Hello"))
console.log(findElement(arr,"H"))


console.log(arr.includes("Hello"))

// Q2: How do you check if an element exists in an array , if it is present return index position

const findElementIndex = (arr,target) =>{
    for(let i=0;i<arr.length;i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(findElementIndex(arr,"Hello"));

// How to delete , add and update element from specific index
console.log(arr)
arr.splice(1,3)
console.log(arr)
arr.splice(1,0,2,3,4,5,6)
console.log(arr)
arr.splice(1,3,6,7,8)
console.log(arr)

// splice vs slice

const subArr = arr.slice(1,4)
console.log(subArr)

// How to copy an array in javascript

// Shalow copy

const arrB = arr;
arrB.splice(1,4)
console.log(arrB,arr)

// Deep copy

const arrC = [...arr]
arrC.splice(1,2)
console.log(arrC,arr)

// How to add two array in javascript?

const newArr = [...arr, ...arrC]
console.log(newArr)

// Q3 how can you check if two arrays are equal or not

const isArrayEqual = (arr1,arr2)=>{
    if(arr1.length !== arr2.length){
        return false;
    }

    for (let i=0; i<arr1.length;i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
        return true;
    }
}

console.log(isArrayEqual([1,2,3],[1,2]))

// Q4 how to sort an array in ascending and descending order

const x = [1,4,6,0,-9,-5]
x.sort((a,b) => a-b) //O(NlogN)
console.log(x)

x.sort((a,b) => b-a)
console.log(x)

x.reverse()
console.log(x)

// Map ,filter and reduce

const newMapArr = x.map((ele,i) => ele*ele )
console.log(newMapArr)

const positiveNumbers = x.filter((ele,i) => ele>0)
console.log(positiveNumbers)

// filter vs find
