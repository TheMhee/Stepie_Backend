import moment from 'moment'

import {ProductTC, CartProductTC } from '../../models'

CartProductTC.addRelation(
  'forProduct',
  {
    resolver: () => ProductTC.getResolver('findById'),
    prepareArgs: {
        _id: (source) => source.productId ,
    },
    projection: { productId: 1 },
  },
)