import mongoose from 'mongoose'
import { composeWithMongoose } from 'graphql-compose-mongoose'
import ProductSchema from './product'
const { Schema } = mongoose

const CartSchema = new Schema({
  userId: {
    type: String,
    required: true,
    index: true,
    ref: 'User',
  },
})

export const CartModel = mongoose.model('Cart', CartSchema)

export const CartTC = composeWithMongoose(CartModel)

export default CartModel
