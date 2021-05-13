import { CartPromotionsTC } from '../../models'

export const CartPromotion = CartPromotionsTC.getResolver('findOne')
export const CartPromotions = CartPromotionsTC.getResolver('findMany')
