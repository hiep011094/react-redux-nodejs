import { combineReducers } from "redux";
import socialsReducers from "./socialsReducers";
import policiesReducers from "./policiesReducers";
import productsReducers from "./productsReducers";
import sliderHerosReducers from "./sliderHerosReducers"

export default combineReducers({
    socialsReducers,
    policiesReducers,
    productsReducers,
    sliderHerosReducers,
});