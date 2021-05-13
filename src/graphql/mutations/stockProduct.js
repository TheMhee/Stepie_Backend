import { StockTC } from '../../models'

export const createStock = StockTC.getResolver('createOne')
export const updateStock = StockTC.getResolver('updateOne')
export const updateStockMany = StockTC.getResolver('updateMany')
export const deleteStockOne = StockTC.getResolver('removeOne')