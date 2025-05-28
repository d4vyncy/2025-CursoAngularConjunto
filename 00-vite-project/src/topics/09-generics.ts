export function whatsMyType<T>(argument:T):T{

    return argument;
}

const amIString= whatsMyType<string>('Hola mundo');
const amIString2= whatsMyType<string>('1234');
const amINumber= whatsMyType<number>(123);
const amIArray= whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIString.split(' '));
console.log(amIString2.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));