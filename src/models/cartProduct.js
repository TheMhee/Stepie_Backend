import mongoose from 'mongoose'
import bcrypt from 'mongoose-bcrypt'
import { composeWithMongoose } from 'graphql-compose-mongoose'

const { Schema } = mongoose

const CartProductSchema = new Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId, reqiured: true, ref: 'products', unique:false, index: true,
    },
    quantity:{ type:Number , reqiured:true, default:1},
    cartId:{
        type: mongoose.Schema.Types.ObjectId, reqiured: true, ref: 'cart', unique:false, index: true,
    },
    
}   
)

export const CartProductModel = mongoose.model('CartProduct', CartProductSchema)

export const CartProductTC = composeWithMongoose(CartProductModel)

export default CartProductModel