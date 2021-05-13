import mongoose from 'mongoose'
import bcrypt from 'mongoose-bcrypt'
import { composeWithMongoose } from 'graphql-compose-mongoose'

const { Schema } = mongoose

const ProductSchema = new Schema({
    productName: {
        type: String, required: true, index: true, unique: false
    },
    productDesc:{
        type: String, required: false
    },
    price:{
        type: Number,  required: true
    },
    catagory:{
        type: String, required: true
    },
    genderType:{
        type: String, required: true
    },
    imgUrl:{
        type: String,
    }
})

export const ProductModel = mongoose.model('Product', ProductSchema)

export const ProductTC = composeWithMongoose(ProductModel)

export default ProductModel