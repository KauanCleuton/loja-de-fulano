import { dataProducts } from "../utils/data";

class ProductService {
    filterProductsByCategory(type) {
        return dataProducts.filter((item) => item.type === type);
    }
    
    filterProductsById(id) {
        return dataProducts.find((item) => item.id === Number(id)); 
    }
}

export default ProductService;
