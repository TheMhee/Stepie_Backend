

import { PromotionTC, ProductTC } from '../../models'

PromotionTC.addRelation(
  'disProduct',
  {
    resolver: () => ProductTC.getResolver('findById'),
    prepareArgs: {
      _id: (source) => source.productId,
    },
    projection: { productId: 1 },
  },
)
