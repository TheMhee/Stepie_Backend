import mongoose from 'mongoose'
import bcrypt from 'mongoose-bcrypt'
import { composeWithMongoose } from 'graphql-compose-mongoose'

const { Schema } = mongoose

const PaymentSchema = new Schema({
    paymentName: {
        type: String, required: true, index: true, unique: false
    },
    paymentDesc:{
        type: String, required: false
    },
})

export const PaymentModel = mongoose.model('Promotion', PaymentSchema)

export const PaymentTC = composeWithMongoose(PaymentModel)

export default PaymentModel