import axios from "axios";

export function getProductsService(){
    return axios.get('https://fakestoreapi.com/products');
}