const { OrdersServices } = require('../services');
const ordersServices = new OrdersServices();

class OrderController{
    
    static async getAllOrders(req, res){  
        try {
            const orders = await ordersServices.getAllOrders({ clientId: req.clientId });

            return res.status(200).json(orders);  
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getOrder(req, res){
        try {
            const order = await ordersServices.getOrder(req.params.id);

            return res.status(200).json(order);  
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createOrder(req, res){
        const newOrder = {
            ...req.body,
            ClientId: req.clientId,
            status: "pendente",
        }

        try {
            const order = await ordersServices.createNewOrder(newOrder);

            return res.status(200).json(order);  
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = OrderController;