class ProductService {

    static async getProducts(productId = 0) {
        try {
            let data = localStorage.getItem('productData');
    
            if (!data) {
                const response = await fetch('/products.json');
    
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
    
                data = await response.json();
                localStorage.setItem('productData', JSON.stringify(data));
            } else {
                data = JSON.parse(data);
            }
    
            if (productId > 0) {
                let product = data.find(product => product.id == productId);
                return product || null;
            } else {
                return data;
            }
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    }
  
    static async editProduct(updatedProduct) {
        try {
            let products = await ProductService.getProducts();
            const updatedProductData = JSON.parse(updatedProduct);
            const index = products.findIndex(product => product.id == updatedProductData.id);

            if (index === -1) {
                throw new Error('Product not found');
            }
    
            products[index] = updatedProductData;
            localStorage.setItem('productData', JSON.stringify(products));
    
            return products;
        } catch (error) {
            console.error('Error editing product:', error);
            throw error;
        }
    }
}

export default ProductService;