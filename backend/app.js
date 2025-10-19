require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user.route");
const app = express();

app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    res.status(200).json({message: "API is working"});
});

app.use("/api/v1",userRouter);

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
