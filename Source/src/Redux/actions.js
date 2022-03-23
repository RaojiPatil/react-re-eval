import { GET_PRODUCTDATA_ERROR, GET_PRODUCYDATA_SUCCESS, GET_PRODUCTDATA_LOADING, SORTPRODUCT, GET_PRODUCTDATA_REQUEST } from "./actionTypes";



export const GET_PRODUCTDATA_REQUEST = () => ({
    type: GETPRODUCTDATAREQUEST,
});

// action for get products success

export const GET_PRODUCYDATA_SUCCESS = (payload) => ({
    type: GETPRODUCYDATASUCCESS,
    payload,
});

// action for get products failure

export const GET_PRODUCTDATA_ERROR = (message) => ({
    type: GETPRODUCTDATAERROR,
    payload: message,
});

// thunk call to fetch products  list
export const GET_PRODUCTDATA_LOADING = () => ({
    type: GETPRODUCTDATALOADING,

});

// action object for sort  feature

export const sortProducts = (payload) => ({
     type : FILTER_GENER,
  payload,
});
