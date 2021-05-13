import mongoose from 'mongoose'
import bcrypt from 'mongoose-bcrypt'
import { composeWithMongoose } from 'graphql-compose-mongoose'

const { Schema } = mongoose

const CartPromotionsSchema = new Schema({
    promotionsId:{
        type: mongoose.Schema.Types.ObjectId, reqiured: true, ref: 'Promotions', unique:false, index: true,
    },
    quantity:{ type:Number , reqiured:true, default:1},

    cartId:{
        type: mongoose.Schema.Types.ObjectId, reqiured: true, ref: 'cart', unique:false, index: true,
    },
},)

export const CartPromotionsModel = mongoose.model('CartPromotion', CartPromotionsSchema)

export const CartPromotionsTC = composeWithMongoose(CartPromotionsModel)

export default CartPromotionsModel