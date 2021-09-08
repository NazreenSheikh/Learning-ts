//FUNCTION
// function name(parameter: type, parameter:type,...): returnType {
//     //body
//  }

 function add(a: number, b: number): number {
    return a + b;
}
console.log(add(9,8))

//when you don't need anything in return from funtion

function greet(msg: string): void {
    console.log(msg.toUpperCase());
}
 greet("good morning")

 //OPTIONAL PARAMETERS

 function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

//DEFAULT  PARAMETERS

function multiply2(a: number, b: number, c: number=1): number {
    return a * b* c;
}

//REST  PARAMETERS (to make an array)

function findSum(...numbers: number[]): number {
    let Sum = 0;
    numbers.forEach((num) => Sum += num);
    return Sum;
}
console.log(findSum(9,8,8,9))