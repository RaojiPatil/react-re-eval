import { GET_PRO_FAILURE, GET_PRO_REQ, GET_PRO_SUCCESS, SORT_LOW_TO_HIGH } from "./actionTypes"


const initState = {
    products:[],
    isLoading:false,
    isError:false
}

export const Reducer = (state = initState, {type, payload})=>{
    switch(type){
        case  GET_PRO_REQ :
            return { ...state, isLoading : true}
        case GET_PRO_SUCCESS :
            return { ...state, isLoading : false, products : [...state.products, payload]}
        case GET_PRO_FAILURE :
            return { ...state, isLoading : false, isError : true}
        case SORT_LOW_TO_HIGH:
            const data = state.products[0]?.price.sort((a,b)=>{
                return a-b
            })
            console.log(data,"data")
            return {data}
        default :
            return { ...state }
    }
}