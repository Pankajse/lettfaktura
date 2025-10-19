const prisma = require("../lib/prisma");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userSignupSchema, userSigninSchema } = require("../middlewares/validation");


const signupUser = async(req,res)=>{
    const parsedData = userSignupSchema.safeParse(req.body);
    if(!parsedData.success){
        return res.status(400).json({errors: parsedData.error.errors, message: "Validation failed"});
    }

    try {
        const {businessName, personName, address, postalCode, City, email, phoneNo, password} = parsedData.data;
        const existingUser = await prisma.user.findUnique({where: {email}});
        if(existingUser){
            return res.status(400).json({message: "Email already registered. Use different email."});
        }
        const hashPassowrd = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                businessName,
                personName,
                address,
                postalCode,
                City,
                email,
                phoneNo,
                password : hashPassowrd,
            }
        });
        return res.status(201).json({message: "User registered successfully", user});
    } catch (error) {
        res.status(500).json({message: "Internal server error", error: error.message});
    }
};

const signinUser = async(req,res)=>{
    const parsedData = userSigninSchema.safeParse(req.body);
    if(!parsedData.success){
        return res.status(400).json({errors: parsedData.error.errors, message: "Validation failed"});
    }
    try {
        const {email, password} = parsedData.data;
        const user = await prisma.user.findUnique({where: {email}});
        if(!user){
            return res.status(400).json({message: "Email does not exist"});
        }
        const comparePassword = await bcrypt.compare(password, user.password);
        if(!comparePassword){
            return res.status(400).json({message: "Incorrect password"});
        }
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET);
        return res.status(200).json({message: "Signin successful", token, user});
    } catch (error) {
        res.status(500).json({message: "Internal server error", error: error.message});
    }
};

module.exports = {signupUser, signinUser};