const name = "Praveen"
const arr = [1, 2, 3, 4, 5]
console.log(name)
console.log(arr)

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}


const name_1 = "Praveen"
console.log(name_1)

let age = 25
if(age > 18) {
    console.log("You can drive")
} else {
    console.log("You can't drive")
}

let age_1 = 25
age_1 > 18 ? console.log("You can drive") : console.log("You can't drive");

let age_2 = 2
age_2 > 18 ? console.log("You can drive") : console.log("You can't drive");


function add(a, b) {
    return a + b
}

result = add(2, 3)
console.log(result) 
console.log(Math.max(1, 2, 3, 4, 5)) 
console.log(Number.parseFloat("3.14")); 
console.log(Number.parseInt("42px"));   
console.log((1.2345).toFixed(2));       
console.log((255).toString(16));        