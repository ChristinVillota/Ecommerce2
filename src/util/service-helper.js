import {getProductListURL}from './service-url';
import axios from 'axios';

const getProductList = () => {
    return axios.get(getProductListURL);
}

export {
    getProductList
}