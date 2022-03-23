import { GET_PRO_FAILURE, GETPRODUCTREQ, GET_PRO_SUCCESS } from "./actionTypes"


const initState = {
    products:[],
    isLoading:false,
    isError:false
}

export const Reducer = (state = initState, {type, payload})=>{
    switch(type){
        case  GETPRODUCTREQ :
            return { ...state, isLoading : true
            }
        case GET_PRO_SUCCESS :
            return { ...state, isLoading : false, products : [...state.products, payload]
            }
        case GET_PRO_FAILURE :
            return { ...state, isLoading : false, isError : true
            }
        
        default :
            return { ...state }
    }
}
// // all action are working