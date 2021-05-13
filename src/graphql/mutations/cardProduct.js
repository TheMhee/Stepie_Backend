
import { CartProductTC } from '../../models/'

export const createCartProduct = CartProductTC.getResolver('createOne')
export const updateCartProduct = CartProductTC.getResolver('updateById')
