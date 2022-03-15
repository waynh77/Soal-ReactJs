import axios from 'axios';

const Product_API_BASE_URL = "https://localhost:7038/api/Product";

class ProductService {

    getProducts(){
        return axios.get(Product_API_BASE_URL);
    }

    createProduct(Product){
        return axios.post(Product_API_BASE_URL, Product);
    }

    getProductById(ProductId){
        return axios.get(Product_API_BASE_URL + '/' + ProductId);
    }

    updateProduct(Product, ProductId){
        return axios.put(Product_API_BASE_URL + '/' + ProductId, Product);
    }

    deleteProduct(ProductId){
        return axios.delete(Product_API_BASE_URL + '/' + ProductId);
    }
}

export default new ProductService()