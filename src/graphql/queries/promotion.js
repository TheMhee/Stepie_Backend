import { PromotionTC } from '../../models/promotion'

export const promotions = PromotionTC.getResolver('findMany')

export const promotion = PromotionTC.getResolver('findOne')