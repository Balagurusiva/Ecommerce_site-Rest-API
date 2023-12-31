import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
    product_name: {
        type: String,
        required: true
    },
    product_cat_id: {
        type:Schema.Types.ObjectId,
        required:true,
        ref: 'category'
    },
    product_price: {
        type: Number,
        required: true
    },
    product_desc: {
        type: String,
        required: true
    },
    product_img: {
        type: "String",
        required: true
    }
})

export default mongoose.model("product", productSchema)

