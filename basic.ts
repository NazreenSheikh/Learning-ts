// Get started
// to install typescript
// use command => npm install typescript
// npm install node-ts ((to compile ts to js)

//basics of typescript
let name1: string = 'nazreen';
console.log(name1); //run in terminall cmd: ts-node basic.ts

//basic types
// 1.NUMBER

let count : number = 8;
let a: number = 500,
    b: number = 400;
let Binnum: number = 0B010;
let octalnum: number = 0o10;
// let theBiggestInt:bigint = 9007199254740991n;

// 2.STRING
let firstName: string = "Nazreen";
let target : string= `my target is
to complete
typeScipt
`;
let profile: string = `I'm ${firstName}.${target}`;

//BOOLEAN
let name2:boolean = true;

//OBJECT
let employee: object= {
    firstName: 'Naaz',
    lastName: 'Sheikh',
    age: 20,
};
// above object  can also defined as below and this is more specifying
let employee1: {
    firstName: string;
    lastName: string;
    age: number;
} = {
    firstName: 'Naaz',
    lastName: 'Sheikh',
    age: 20,
};
// empty type {}
let vacant: {} = {};
console.log(vacant.toString());

//ARRAY

let plateform: string[]=[];
plateform.push("youtube") ;
plateform.push("google") ;


let rank : (string | number)[];
rank = ['youtube', 2, 'google', 1];

//ANY
// Sometimes, you may need to store a value in a variable. But you don’t know its type at the time of writing the program. And the unknown value may come from a third party API or user input In this case, you want to opt-out of the type checking and allow the value to pass through the compile-time check.

//VOID
//when you don't need anything in return
function log(message): void {
    console.log(message);
}
