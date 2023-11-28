import CartService from './CartService';

class OrderService {

    static async getOrders(orderId = 0) {
        try {
            let data = JSON.parse(localStorage.getItem('orderData')) || [];
    
            if (!data.length) {
                const response = await fetch('/orders.json');
    
                if (!response.ok) {
                    throw new Error(`Failed to fetch orders`);
                }
    
                data = await response.json();
                localStorage.setItem('orderData', JSON.stringify(data));
            }
    
            if (orderId > 0) {
                let order = data.find(order => order.id == orderId);
                return order || null;
            } else {
                return data;
            }
        } catch (error) {
            console.error('Error fetching orders:', error);
            throw error;
        }
    }    
  
    static async newOrder(order) {
        try {
            const orders = await OrderService.getOrders();
            const cart = await CartService.getCart();
    
            if (!cart) {
                throw new Error('Cart not found');
            }
    
            const newOrder = {
                ...JSON.parse(order),
                id: Math.random().toString(),
                cart,
            };
    
            const updatedOrders = [newOrder, ...orders];
            localStorage.setItem('orderData', JSON.stringify(updatedOrders));
    
            await CartService.emptyCart();
    
            return updatedOrders;
        } catch (error) {
            console.error('Error creating new order:', error);
            throw error;
        }
    }
    
}

export default OrderService;