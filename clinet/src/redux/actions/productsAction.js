import { createActions } from "redux-actions";

export const getProducts = createActions({
    getProductsReq: undefined,
    getProductsSs: (payload) => payload,
    getProductsFail: (err) => err
})