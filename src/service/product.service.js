import { dataProducts } from "../utils/data";


class ProductService {
    filterProductsByCategory(type) {
        return dataProducts.filter((item) => item.type === type)
    }
    filterProductsById(id) {
        return dataProducts.filter((item) => item.id === id)
    }
}

export default ProductService