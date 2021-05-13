import { CartTC } from '../../models/'

export const createCart = CartTC.getResolver('createOne')
export const updateCart = CartTC.getResolver('updateById')
