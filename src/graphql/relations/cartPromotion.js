import moment from 'moment'

import {PromotionTC, CartPromotionsTC } from '../../models'

CartPromotionsTC.addRelation(
  'forPromotion',
  {
    resolver: () => PromotionTC.getResolver('findById'),
    prepareArgs: {
        _id: (source) => source.promotionsId ,
    },
    projection: { promotionsId: 1 },
  },
)