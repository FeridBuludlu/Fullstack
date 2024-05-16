import express from "express";
import mongoose from 'mongoose';
import cors from "cors";
import "dotenv/config";

const app = express()
app.use(express.json())
app.use(cors())

const categorySchema = new mongoose.Schema({
    title: String,
    image: String,
    price: Number,
    description: String,
})

const categoryModel = mongoose.model("category", categorySchema);

app.get("/category", async (req, res) => {
    const categories = await categoryModel.find()
    res.send(categories)
})

app.get("/category/:id", async (req, res) => {
    const { id } = req.params
    const category = await categoryModel.findById(id)
    res.send(category)
})

app.post("/category", async (req, res) => {
    const { title, price, image, description } = req.body;
    const newCategory = new categoryModel({ title, price, image, description });
    await newCategory.save();
    res.status(201).send("Item created");
})

app.delete("/category/:id", async (req, res) => {
    const { id } = req.params;
    const deletedCategory = await categoryModel.findByIdAndDelete(id);
    res.send("item deleted");
})

app.put("/category/:id", async (req, res) => {
    const { id } = req.params
    const { title, price, image, description } = req.body
    await categoryModel.findByIdAndUpdate(id, { title, price, image, description })
    res.send("Item updated")
})

app.listen(process.env.PORT, () => {
    console.log(`api running on ${process.env.PORT} `)
})

mongoose.connect(process.env.Connect_string)
    .then(() => console.log("Connected!"))
    .catch((err)=> console.log("Not Connected!"));

