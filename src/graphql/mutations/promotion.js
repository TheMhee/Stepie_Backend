import { PromotionTC } from '../../models/promotion'

export const createPromotion = PromotionTC.getResolver('createOne')
export const updatePromotionById = PromotionTC.getResolver('updateById')
export const updateManyPromotion = PromotionTC.getResolver('updateMany')
export const deletePromotionOne = PromotionTC.getResolver('removeOne')
export const deletePromotionById = PromotionTC.getResolver('removeById')
export const countPromotion = PromotionTC.getResolver('count')