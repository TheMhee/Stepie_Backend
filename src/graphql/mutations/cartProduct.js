
import { CartProductTC } from '../../models/'

export const createCartProduct = CartProductTC.getResolver('createOne')
export const updateCartProduct = CartProductTC.getResolver('updateById')
export const deleteCartProductMany = CartProductTC.getResolver('removeMany')
export const deleteCartProductOne = CartProductTC.getResolver('removeOne')