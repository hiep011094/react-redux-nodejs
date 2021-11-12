import { INIT_STATE } from "../../constant"
import { getType } from "../actions/getType"
import { getSliderHeros } from "../actions/sliderHerosAction"

export default function sliderHerosReducers(state = INIT_STATE.sliderHeros, action) {
    switch (action.type) {
        case getType(getSliderHeros.getSliderHerosReq):
            return {
                ...state,
                isLoading: true
            };
        case getType(getSliderHeros.getSliderHerosSs):
            return {
                ...state,
                isLoading: false,
                data: action.payload
            };
        case getType(getSliderHeros.getSliderHerosFail):
            return {
                ...state,
                isLoading: false
            };

        default:
            return state;
    }
}