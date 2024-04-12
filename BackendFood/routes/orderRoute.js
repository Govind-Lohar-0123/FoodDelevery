import express from "express";
const router=express.Router();
import OrderController from "../controllers/orderController.js";

router.get("/getorder",OrderController.getOrder);
router.put("/addorder",OrderController.addOrder);

export default router;

