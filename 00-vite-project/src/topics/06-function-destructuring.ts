
export interface Product {
    descripion: string;
    price: number;

}

const phone: Product={
    descripion:'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    descripion: 'iPad Air',
    price: 250.0
}


interface TaxCalculationOptions{
    tax:number;
    products:Product[];
}
// function taxCalculation(options:TaxCalculationOptions):number[]{
//     let total=0;
//     options.products.forEach(product=>{
//         total +=product.price;
//     });
//     return [total,total*options.tax];
// }

export function taxCalculation(options:TaxCalculationOptions):number[]{
    let total=0;
    options.products.forEach(product=>{
        total +=product.price;
    });
    return [total,total*options.tax];
}


const shopipingCart =[phone,tablet];
const tax=0.15;

// const result=taxCalculation({
//     products:shopipingCart,
//     tax,
// });
// console.log('Total',result[0]);
// console.log('Tax',result[1]);

const [total1,tax1]=taxCalculation({
    products:shopipingCart,
    tax,
});
console.log('Total',total1);
console.log('Tax',tax1);



