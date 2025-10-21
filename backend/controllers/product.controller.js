const prisma = require("../lib/prisma");
const { productSchema } = require("../middlewares/validation");

const addProduct = async (req, res) => {
    const parsedData = productSchema.safeParse(req.body);
    if (!parsedData.success) {
        return res.status(400).json({ errors: parsedData.error.errors, message: "Validation failed" });
    }
    const { articleNo, productName, inPrice, price, unit, inStock, description } = req.body;
    const ownerId = req.user.id;

    if (!articleNo || !productName || !inPrice || !price || !unit || !inStock || !description) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const newProduct = await prisma.product.create({
            data: {
                articleNo,
                productName,
                inPrice,
                price,
                unit,
                inStock,
                description,
                ownerId,
            },
        });
        res.status(201).json({ message: "Product added successfully", product: newProduct });
    } catch (error) {
        console.error("Error adding product: ", error);
        res.status(500).json({ message: "Failed to add product" });
    }
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const dataToUpdate = req.body;
    const userId = req.user.id;

    try {
        const product = await prisma.product.findUnique({
            where: { id: parseInt(id) },
        });

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        if (product.ownerId !== userId) {
            return res.status(403).json({ message: "You are not authorized to update this product" });
        }

        const updatedProduct = await prisma.product.update({
            where: { id: parseInt(id) },
            data: dataToUpdate,
        });

        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ message: "Failed to update product" });
    }
};

const getAllProducts = async (req, res) => {
    const userId = req.user.id;
    try {
        const products = await prisma.product.findMany({
            where: { ownerId: userId },
        });
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products: ", error);
        res.status(500).json({ message: "Failed to fetch products" });
    }
};


const addProducts = async (req, res) => {
  const products = req.body; // Expecting an array of products
  const ownerId = req.user.id;

  if (!Array.isArray(products) || products.length === 0) {
    return res.status(400).json({ message: "Products array is required" });
  }

  // validate
  for (let i = 0; i < products.length; i++) {
    const { articleNo, productName, inPrice, price, unit, inStock, description } = products[i];
    if (!articleNo || !productName || inPrice == null || price == null || !unit || inStock == null || !description) {
      return res.status(400).json({ message: `All fields are required for product at index ${i}` });
    }
  }

  try {
    // Add ownerId
    const dataToInsert = products.map((p) => ({ ...p, ownerId }));

    const newProducts = await prisma.product.createMany({
      data: dataToInsert,
      skipDuplicates: true,
    });

    res.status(201).json({
      message: `Successfully added ${newProducts.count} products`,
    });
  } catch (error) {
    console.error("Error adding products: ", error);
    res.status(500).json({ message: "Failed to add products" });
  }
};


module.exports = {
    addProduct,
    updateProduct,
    getAllProducts,
    addProducts
};