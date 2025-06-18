alert("Hello World! ");

//Strings
console.log("My name is Ray Shani");

let email='mario.net@gmail.com';
console.log(email);

//String Concatenation
let firstName="Brandon";
let lastName="Macharia";
let fullname=firstName+""+lastName;
console.log(fullname);

//Getting characters
console.log(firstName[3]);

//Methods 
let index=email.indexOf('@');
console.log(index);

// let result=email.lastIndexOf('n');
// console.log(result);

// let slicer=email.slice(0,10);
// console.log(slicer);

let sub=email.substr(0,14)
console.log(sub);

let replacer=email.replace('m','w');
console.log(replacer);

//Numbers and math operators
//BIDMAS= Brackets,Indices,Division,Multiplication,Addition,Subtraction
//You can bet not a number when you try to divide multiply and minus a number with a string
 
//Arrays 
let ninjas=['michael','leo','donatello','raphael'];
console.log(ninjas[1]);

//Array methods
console.log(ninjas.length);

let result=ninjas.join(",");
console.log(result);

let newResult=ninjas.concat(['desperado','photo']);
console.log(newResult);

//Boolens we have the == operator used in checking foor the differences
let name="John";
console.log(Number(name));

// Working on control statements
for(let i=0;i<5;i++){
  console.log(i); 
}

const names=['shaun','mario','luigi'];
for(let i=0;i<names.length;i++){
  console.log(names[i]);  
}


let anumber=0;
while(i<0){
  console.log(0);
  i++;
}