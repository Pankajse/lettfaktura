const {z} = require("zod");

const userSignupSchema = z.object({
    businessName: z.string().min(1, "Business name is required"),
    personName : z.string().min(1, "Person name is required"),
    address: z.string().min(1, "Address is required"),
    postalCode: z.string().min(1, "Postal code is required"),
    City : z.string().min(1, "City is required"),
    email: z.email("Invalid email address"),
    phoneNo: z.string().min(6, "Phone number must be at least 10 digits").max(15, "Phone number must be at most 15 digits"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

const userSigninSchema = z.object({
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

const productSchema = z.object({
    articleNo: z.number().min(1, "Article number is required"),
    productName: z.string().min(1, "Product name is required"),
    inPrice: z.number().min(0, "In price must be a positive number"),
    price : z.number().min(0, "Price must be a positive number"),
    unit: z.string().min(1, "unit is required"),
    inStock: z.number().min(0, "In stock must be a positive number"),
    description: z.string().min(1, "Description is required"),
});

module.exports = {
    userSignupSchema, userSigninSchema, productSchema,
};