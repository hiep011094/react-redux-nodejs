import axios from "axios";

const URL = "http://localhost:5000";

export const fetchSocials = () => axios.get(`${URL}/api/v1/social`);

//Policy
export const fetchPolicies = () => axios.get(`${URL}/api/v1/policy`);
//product
export const fetchProducts = () => axios.get(`${URL}/api/v1/products`);
//sliderHero
export const fetchsliderHeros = () => axios.get(`${URL}/api/v1/hero-slider`);

// customer
export const fetchCustomers = () => axios.get(`${URL}/api/v1/customer/`);
// customer
export const fetchCustomerByName = (name) => axios.get(`${URL}/api/v1/customer/${name}`);