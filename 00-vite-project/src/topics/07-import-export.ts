import { Product, taxCalculation } from './06-function-destructuring';

const shopipingCart: Product[] = [
    {
        descripion: 'Nokia',
        price: 100
    },
    {
        descripion: 'iPad',
        price: 150
    }
];

// const shopipingCart =[phone,tablet];
// const tax=0.15;

const [total, tax] = taxCalculation({
    products: shopipingCart,
    tax:0.15
});

console.log('Total', total); 
console.log('TAX', tax);

