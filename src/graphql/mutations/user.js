import { UserTC } from '../../models'

export const createUser = UserTC.getResolver('createOne')
export const updateUserById = UserTC.getResolver('updateById')
export const removeUserById = UserTC.getResolver('removeById')
