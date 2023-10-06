import { getElement } from '../utils.js';
import display from '../displayProducts.js';
const setupSearch = (store) => {
    const form = getElement('.input-form')
    const name = getElement('.search-input')
    form.addEventListener('keyup', function (){
        const value = name.value
        value.toLowerCase()
        if(value){
            const newStore = store.filter((product) =>{
                let{name} = product
                name = name.toLowerCase()
                if(name.includes(value)){
                    return product
                }
            })
            display(newStore, getElement('.products-container'))
            if(newStore.length <1){
               const products = getElement('.products-container')
               products.innerHTML = `<h3 class="filter-error"> sorry no products match </h3>`
            }

        }
        else{
            display(store,getElement('.products-container'))
        }
    })
};

export default setupSearch;
