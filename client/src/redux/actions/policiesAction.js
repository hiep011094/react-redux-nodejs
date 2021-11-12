import { createActions } from "redux-actions";

export const getPolicies = createActions({
    getPoliciesReq: undefined,
    getPoliciesSs: (payload) => payload,
    getPoliciesFail: (err) => err

})