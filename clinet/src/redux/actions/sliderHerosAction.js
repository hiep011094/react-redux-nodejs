import { createActions } from "redux-actions";

export const getSliderHeros = createActions({
    getSliderHerosReq: undefined,
    getSliderHerosSs: (payload) => payload,
    getSliderHerosFail: (err) => err
})