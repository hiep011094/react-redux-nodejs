import { INIT_STATE } from "../../constant";
import { getType } from "../actions/getType";
import { getProducts } from "../actions/productsAction";

export default function productsReducers(state = INIT_STATE.products, action) {
    switch (action.type) {
        case getType(getProducts.getProductsReq):
            return {
                ...state,
                isLoading: true,
            };
        case getType(getProducts.getProductsSs):
            return {
                ...state,
                isLoading: false,
                data: action.payload
            };
        case getType(getProducts.getProductsFail):
            return {
                ...state,
                isLoading: false,
            };

        default:
            return state;
    }
}