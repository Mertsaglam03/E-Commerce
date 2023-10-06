import { allProductsUrl } from './utils.js';

const fetchProducts = async () => {
    const response = await fetch(allProductsUrl)
    if(response){
        return response.json()

    }
    
    
};

export default fetchProducts;
