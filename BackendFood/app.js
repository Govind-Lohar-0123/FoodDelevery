import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import connectDB from "./config/db/connectDB.js";
import UserRoute from "./routes/userRoute.js";
import FoodRoute from "./routes/foodRoute.js";

dotenv.config();
const app = express();
app.use(cors());

const PORT = process.env.PORT || 8000;
// const DATABASE_URL=process.env.DATABASE_URL;
const DATABASE_URL = "mongodb://Govind_Lohar:GOVIND_LOHAR_3210@ac-v9eezp9-shard-00-00.40qcro8.mongodb.net:27017,ac-v9eezp9-shard-00-01.40qcro8.mongodb.net:27017,ac-v9eezp9-shard-00-02.40qcro8.mongodb.net:27017/FoodDelevery?ssl=true&replicaSet=atlas-piid7l-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

//parse middleware
app.use(express.json());

//AUTHENTICATE USER
app.use(passport.initialize());

//CONNECT DATABASE
connectDB(DATABASE_URL);

//Load Routes
app.use("/api", UserRoute);
app.use("/foodApi", FoodRoute);

app.get("/", (req, res) => (res.send("HelloWolrd")))









//listening server

app.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`);
})