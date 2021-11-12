import { INIT_STATE } from "../../constant";
import { getType } from "../actions/getType";
import { getPolicies } from "../actions/policiesAction";

export default function policiesReducers(state = INIT_STATE.policies, action) {
    switch (action.type) {
        case getType(getPolicies.getPoliciesReq):
            return {
                ...state,
                isLoading: true,
            };
        case getType(getPolicies.getPoliciesSs):
            return {
                ...state,
                isLoading: false,
                data: action.payload
            };
        case getType(getPolicies.getPoliciesFail):
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
}