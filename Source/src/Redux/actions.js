import { GET_PRO_FAILURE, GET_PRO_REQ, GET_PRO_SUCCESS } from "./actionTypes";

export const GETPRODUCTREQ = () => ({ type : GET_PRO_REQ });

export const GETProductsSuccess = (payload) => ({ type : GET_PRO_SUCCESS,
 payload
});
export const GETProductsFailure = (message) =>
 ({ type : GET_PRO_FAILURE,
    payload : message
});


// // all action are working