import mongoose from 'mongoose'
import bcrypt from 'mongoose-bcrypt'
import { composeWithMongoose } from 'graphql-compose-mongoose'

const { Schema } = mongoose

const StockSchema = new Schema({
    productId: {
        type: String, required: true, index: true, unique: false
    },
    quantity:{
        type: Number, required: true
    },
})

export const StockModel = mongoose.model('Stock', StockSchema)

export const StockTC = composeWithMongoose(StockModel)

export default StockModel