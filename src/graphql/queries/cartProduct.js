import { CartProductTC } from '../../models'

export const CartProduct = CartProductTC.getResolver('findOne')
export const CartProducts = CartProductTC.getResolver('findMany')

