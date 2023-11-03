import mongoose from "mongoose";

const { Schema } = mongoose;

const categorySchema = new Schema({
    cat_name: {
        type: String,
        required: true
    },
    cat_description: {
        type: String,
        required: true
    }
})

export default mongoose.model('category', categorySchema)