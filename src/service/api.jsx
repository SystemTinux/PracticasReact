import products from '../data/products.json'

export const getProducts = () => {
    return new
    Promise((resolve) =>{
        setTimeout(() => {
            resolve(products); //simula trucada asíncrona
        }, 500); //simula retard
    });
};