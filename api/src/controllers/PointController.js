const { PointsServices } = require('../services');
const pointsServices = new PointsServices();

class PointController{
    
    static async getAllPoints(req, res){  
        try {
            const points = await pointsServices.getAllRegisters();

            return res.status(200).json(points);  
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PointController;