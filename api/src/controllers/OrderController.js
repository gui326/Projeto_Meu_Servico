const { OrdersServices } = require('../services');
const ordersServices = new OrdersServices();

class OrderController{
    
    static async getAllOrders(req, res){  
        try {
            const orders = await ordersServices.getAllRegisters();

            return res.status(200).json(orders);  
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = OrderController;