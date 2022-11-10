import {
    GET_FAVOURITES_REQUEST,GET_FAVOURITES_SUCCESS,GET_FAVOURITES_FAILURE,
    ADDTO_FAVOURITES_REQUEST,ADDTO_FAVOURITES_SUCCESS,ADDTO_FAVOURITES_FAILURE,REMOVE_FROM_FAVOURITES_REQUEST,REMOVE_FROM_FAVOURITES_SUCCESS,REMOVE_FROM_FAVOURITES_FAILURE
} from '../constants/constants'
const INITIAL_STATE = {
    loading: false,
    message:null,
    error:null,
    favourites:[],
};

const favourites = (state= INITIAL_STATE,action) =>{
    switch(action.type){
        case GET_FAVOURITES_REQUEST:
            return {
                ...state,
                loading:true,
                message:null,
                error:null,
            }
        case GET_FAVOURITES_SUCCESS:
            return {
                ...state,
                loading:false,
                message:'Favourites List',
                error:null,
            }
        case GET_FAVOURITES_FAILURE:
            return {
                ...state,
                loading:false,
                message:null,
                error:action.payload,
            }
        case ADDTO_FAVOURITES_REQUEST:
            return {
                ...state,
                loading:true,
                message:null,
                error:null,
            }
        case ADDTO_FAVOURITES_SUCCESS:

        let newFavourites = [...state.favourites,action.payload]

            return{ 

                ...state,
                loading:false,
                message:'Favourites List',
                error:null,
                favourites:newFavourites,
            }

            
        case ADDTO_FAVOURITES_FAILURE:
            return {
                ...state,
                loading:false,
                message:null,
                error:action.payload,
            }
        case REMOVE_FROM_FAVOURITES_REQUEST:
            return {
                ...state,
                loading:true,
                message:null,
                error:null,
            }
        case REMOVE_FROM_FAVOURITES_SUCCESS:
            return {
                ...state,
                loading:false,
                message:'Favourites List',
                error:null,
                favourites:state.favourites.filter((item)=>item.email !== action.payload),
            }
        case REMOVE_FROM_FAVOURITES_FAILURE:
            return {
                ...state,
                loading:false,
                message:null,
                error:action.payload,
                
            }
        default:
            return state;
            
    }
}

export default favourites;