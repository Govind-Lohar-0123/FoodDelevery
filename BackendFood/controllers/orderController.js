import orderModel from "../config/models/orderSchema.js";


class OrderController {

    static getOrder = async (req, res) => {

        try {
            const result = await orderModel.find({ email: req.body.email });
           
            res.status(200).send({ order_data: result, status: true });
        }
        catch (err) {
            res.send({ failed: err, status: false });
        }

    }
    static addOrder = async (req, res) => {
        try {
            let result = await orderModel.find({ email: req.body.email });
           
            if (result == null) {
               
                 result = await orderModel.insertMany({ ...req.body });
            
            }

            else {
              
                 result = await orderModel.findOneAndUpdate({email:req.body.email},{$push:{order_data:req.body.order_data}});
                console.log(result);
            }
            res.status(200).send({ status: true });
        }

        catch (err) { res.send({ failed: err + "" }) }




    }



}
export default OrderController;