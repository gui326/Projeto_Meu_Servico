const { CategoriesServices } = require('../services');
const Categorieservices = new CategoriesServices();

class CategoryController{

    static async getCategories(req, res){  
        try {
            const categories = await Categorieservices.getAllRegisters();

            return res.status(200).json(categories);  
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = CategoryController;