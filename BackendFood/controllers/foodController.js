import foodModel from "../config/models/foodSchema.js";

class FoodController{
    static getFood=async(req,res)=>{
        const foodData=await foodModel.find();
        res.status(200).send({foodData});
    }
}
export default FoodController;