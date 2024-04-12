import orderModel from "../config/models/orderSchema.js";


class OrderController {

    static getOrder = async (req, res) => {
        const result =await orderModel.find({email});
        res.status(200).send({order_data:result.order_data,status:true});
    }
    static addOrder = async (req, res) => {
        const result =await orderModel.insertMany({email},{order_data:req.foodItems});
        res.status(200).send({status:true});
        
    }



}
export default OrderController;