

import { StockTC, ProductTC } from '../../models'

ProductTC.addRelation(
  'hasStock',
  {
    resolver: () => StockTC.getResolver('findOne'),
    prepareArgs: {
        filter: (source) => ({ productId:source._id }),
    },
    projection: { _id: 1 },
  },
)
