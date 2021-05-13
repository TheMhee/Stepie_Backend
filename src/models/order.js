import mongoose from 'mongoose'
import { composeWithMongoose } from 'graphql-compose-mongoose'
import ProductSchema from './product'
const { Schema } = mongoose
const enumStatusType = {
    PAID: 'Paid',
    CANCEL: 'Cancel',
    WAITING: 'Waiting',
  }
const OrderSchema = new Schema({
  userId: {
    type: String,
    required: true,
    index: true,
    ref: 'User',
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  products:[
    {
        productId:{
            type: mongoose.Schema.Types.ObjectId, reqiured: true, ref: 'products'
        },
        forProduct : {
            productName: {
              type: String, required: true, index: true, unique: false
            },
            productDesc:{
                type: String, required: false
            },
            price:{
                type: Number,  required: true
            },
            imgUrl:{
                type: String,
            }
        },
        quantity:{ type:Number , reqiured:true, default:1}
    }
  ],
  promotions:[
    {
        promotionId:{
            type: mongoose.Schema.Types.ObjectId, reqiured: true, ref: 'promtions'
        },
        forPromotion:{
          promotionName: {
              type: String, required: true, index: true, unique: false
          },
          promotionDesc:{
              type: String, required: false
          },
          discountInPercent:{
              type: Number
          },
          productId:{
              type: mongoose.Schema.Types.ObjectId, reqiured: true, ref: 'products'
          },
          disProduct:{
            productName:{type: String, required: true, index: true, unique: false},
            price:{ type:Number, default:1},
            imgUrl:{type: String}
          }
        },
        quantity:{ type:Number , reqiured:true, default:1},
    }
  ],
  timestamp: { type: Date, default: Date.now, index: true },
  status: { type: String,enum: Object.keys(enumStatusType),default: 'Waiting',required: true,}
})

export const OrderModel = mongoose.model('Order', OrderSchema)

export const OrderTC = composeWithMongoose(OrderModel)

export default OrderModel
