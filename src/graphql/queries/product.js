import { ProductTC } from '../../models/product'

export const products = ProductTC.getResolver('findMany')

export const product = ProductTC.getResolver('findOne')
export const productById = ProductTC.getResolver('findById')