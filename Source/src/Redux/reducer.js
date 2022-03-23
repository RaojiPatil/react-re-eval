import {
    GET_PRODUCTDATA_REQUEST,
    GET_PRODUCTDATA_ERROR,
    GET_PRODUCYDATA_SUCCESS,
    GET_PRODUCTDATA_LOADING,
    SORTPRODUCT
  } from "./actionTypes";



const initState = {
    products:[],
    sortproduct: [],
    isLoading:false,
    isError:false
}

export const Reducer = (state = initState, { type, payload })=>{
   
    // add the switch statement for different actions

    switch (type) {
        case GET_PRODUCTDATA_LOADING:
          return { ...state, isLoading: true };
        case GET_PRODUCYDATA_SUCCESS:
          return { ...state, isLoading: false, products: [...state.products, payload] };
        case GET_PRODUCTDATA_ERROR:
          return { ...state, isError: true };
        case SORTPRODUCT :
           const newProduct = state.data[0]?.filter((item)=>item.price != payload)
          
           return { ...state, sortproduct : [ ...state.sortproduct, newProduct]}
        default:
          return state;
      }
}

export default Reducer