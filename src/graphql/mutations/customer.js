import { CustomerTC } from '../../models/user'

export const createCustomer = CustomerTC.getResolver('createOne')
export const updateCustomerById = CustomerTC.getResolver('updateById')
export const removeCustomerById = CustomerTC.getResolver('removeById')
