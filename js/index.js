// Iteration 1: Names and Input
console.log("I'm ready!");
let hacker1 = 'Alessio';
console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Marina';
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
if (hacker1.length < hacker2.length) {`The driver has the longest name, it has ${hacker1.length} characters.`}
else if ((hacker1.length > hacker2.length)) {`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`}
else {`Wow, you both have equally long names, ${hacker1.length && hacker2 } characters!`}




// Iteration 3: Loops
let upperCaseName = "" ;
for (let i = 0; i < hacker1.length; ++i ) {
 upperCaseName += hacker1[i].toUpperCase() + " "  
}
console.log(upperCaseName)

let reverseName = "" ;
for (let i = hacker2.length-1; i >= 0 ; --i) 
{ reverseName += hacker2[i]}

console.log(reverseName) 

if (hacker1[0] < hacker2[0] ) {
console.log ("The driver's name goes first.")
}

else if (hacker1[0] > hacker2[0]) {
console.log ("Yo, the navigator goes first definitely.")
}

else if (hacker1[0] === hacker2[0])  {"What?! You both have the same name?"

}



