/*
 // Codigo de typescript
*/
interface Address {
    street: string,
    country: string,
    city: string
}
interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress(){
        return this.name + ', ' + this.address.city + ', ' + this.address.street;

    }
}

const address = superHeroe.showAddress();


//console.log(`direccion ${address}`);
console.log(address);




export { };