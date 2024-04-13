import foodModel from "../config/models/foodSchema.js";

class FoodController{
    static getFood=async(req,res)=>{
        try{
            const foodData=await foodModel.find({});
            res.status(200).send({foodData,status:true});
        }
        catch(err){
            res.status(100).send({SearverError :err,status:false});
        }
       
    }
}
export default FoodController;