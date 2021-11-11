import { takeLatest, call, put } from "redux-saga/effects";
import * as api from '../../api';
import { getSocials } from "../actions/socialsActions"
import { getPolicies } from "../actions/policiesAction"
import { getProducts } from "../actions/productsAction";
import { getSliderHeros } from "../actions/sliderHerosAction";

function* fetchSocialSaga(action) {
    try {
        const socials = yield call(api.fetchSocials);
        yield put(getSocials.getSocialsSs(socials.data));
    } catch (err) {
        yield put(getSocials.getSocialsFail(err));
    }
}

function* fetchPoliciesSaga(action) {
    try {
        const policies = yield call(api.fetchPolicies);
        yield put(getPolicies.getPoliciesSs(policies.data));
    } catch (err) {
        yield put(getPolicies.getPoliciesFail(err));
    }
}

function* fetchProductsSaga(action) {
    try {
        const products = yield call(api.fetchProducts);
        yield put(getProducts.getProductsSs(products.data));
    } catch (err) {
        yield put(getProducts.getProductsFail(err));
    }
}

function* fectchSliderHerosSaga(action) {
    try {
        const sliderHeros = yield call(api.fetchsliderHeros);
        yield put(getSliderHeros.getSliderHerosSs(sliderHeros.data));
    } catch (err) {
        yield put(getSliderHeros.getSliderHerosFail(err));
    }
}


function* Saga() {
    yield takeLatest(getSocials.getSocialsReq, fetchSocialSaga);
    yield takeLatest(getPolicies.getPoliciesReq, fetchPoliciesSaga);
    yield takeLatest(getProducts.getProductsReq, fetchProductsSaga);
    yield takeLatest(getSliderHeros.getSliderHerosReq, fectchSliderHerosSaga);
}

export default Saga;