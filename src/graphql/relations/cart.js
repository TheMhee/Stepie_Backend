
import moment from 'moment'

import { CartTC, CartProductTC, CartPromotionsTC } from '../../models'

CartTC.addRelation(
  'products',
  {
    resolver: () => CartProductTC.getResolver('findMany'),
    prepareArgs: {
        filter: (source) => ({ cartId: source._id }),
    },
    projection: { cartId: 1 },
  },
)

CartTC.addRelation(
    'promotions',
    {
      resolver: () => CartPromotionsTC.getResolver('findMany'),
      prepareArgs: {
          filter: (source) => ({ cartId: source._id }),
      },
      projection: { cartId: 1 },
    },
  )
