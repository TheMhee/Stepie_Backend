import { OrderTC } from '../../models'

export const createOrder = OrderTC.getResolver('createOne')
export const updateOrder = OrderTC.getResolver('updateOne')
export const findManyOrder = OrderTC.getResolver('findMany')