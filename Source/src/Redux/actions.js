import { GET_PRODUCTDATA_ERROR, GET_PRODUCYDATA_SUCCESS, GET_PRODUCTDATA_LOADING, SORTPRODUCT, GET_PRODUCTDATA_REQUEST } from "./actionTypes";



export const getProductsReq = () => ({
    type: GET_PRODUCTDATA_REQUEST,
});

// action for get products success

export const getProductsSuccess = (payload) => ({
    type: GET_PRODUCYDATA_SUCCESS,
    payload,
});

// action for get products failure

export const getProductsFailure = (message) => ({
    type: GET_PRODUCTDATA_ERROR,
    payload: message,
});

// thunk call to fetch products  list
export const getproductsData = () => ({
    type: GET_PRODUCTDATA_LOADING,

});

// action object for sort  feature

export const sortProducts = (payload) => ({
    type : SORTPRODUCT,
    payload
});
