import { CustomerTC, UserTC } from '../../models'

CustomerTC.addRelation(
  'forUser',
  {
    resolver: () => UserTC.getResolver('findById'),
    prepareArgs: {
      _id: (source) => source.userId,
    },
    projection: { userId: 1 },
  },
)
