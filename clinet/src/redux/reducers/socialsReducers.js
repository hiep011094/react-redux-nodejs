import { INIT_STATE } from "../../constant";
import { getSocials } from "../actions/socialsActions";
import { getType } from "../actions/getType";

export default function socailsReducers(state = INIT_STATE.socials, action) {
    switch (action.type) {
        case getType(getSocials.getSocialsReq):
            return {
                ...state,
                isLoading: true
            };
        case getType(getSocials.getSocialsSs):
            return {
                ...state,
                isLoading: false,
                data: action.payload
            };
        case getType(getSocials.getSocialsFail):
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
};