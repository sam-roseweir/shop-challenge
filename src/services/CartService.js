import ProductService from './ProductService';

class CartService {

    static async getCart() {
        try {
            let data = JSON.parse(localStorage.getItem('cartData')) || [];
            return data;
        } catch (error) {
            console.error('Error fetching cart data:', error);
            throw error;
        }
    }

    static async addToCart(productId) {
        try {
            const productData = await ProductService.getProducts(productId);
            const cartData = await CartService.getCart();
    
            if (productData) {
                const cartItem = {
                    id: Math.random().toString(),
                    productId: productData.id,
                    name: productData.name,
                    price: productData.price,
                    sku: productData.sku,
                };
                const updatedCart = [cartItem, ...cartData];
                localStorage.setItem('cartData', JSON.stringify(updatedCart));
    
                return updatedCart;
            }
    
            return cartData;
        } catch (error) {
            console.error('Error adding to cart:', error);
            throw error;
        }
    }

    static async removeFromCart(cartId) {
        try {
            let cartData = await CartService.getCart();
    
            if (cartData) {
                const index = cartData.findIndex(item => item.id == cartId);
    
                if (index !== -1) {
                    cartData.splice(index, 1);
                    localStorage.setItem('cartData', JSON.stringify(cartData));
                }
    
                return cartData;
            }
    
            return cartData;
        } catch (error) {
            console.error('Error removing from cart:', error);
            throw error;
        }
    }

    static async emptyCart() {
        localStorage.removeItem("cartData");
        return true;
    }

}

export default CartService;