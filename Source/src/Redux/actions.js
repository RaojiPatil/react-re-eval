import { GET_PRO_FAILURE, GET_PRO_REQ, GET_PRO_SUCCESS, SORT_HIGH_TO_LOW, SORT_LOW_TO_HIGH } from "./actionTypes";

export const getProductsReq = () => ({ type : GET_PRO_REQ });

export const getProductsSuccess = (payload) => ({ type : GET_PRO_SUCCESS,
 payload
});
export const getProductsFailure = (message) =>
 ({ type : GET_PRO_FAILURE,
    payload : message
});

export const sortLowToHigh = () => ({
type: SORT_LOW_TO_HIGH,
})

export const sortHighToLow = () => ({
    type: SORT_HIGH_TO_LOW,
    
})

// all action are working