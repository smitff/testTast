import NavigationService from '../../navigation/Navigationservice'
import {
    GET_FAVOURITES_REQUEST,GET_FAVOURITES_SUCCESS,GET_FAVOURITES_FAILURE,
    ADDTO_FAVOURITES_REQUEST,ADDTO_FAVOURITES_SUCCESS,ADDTO_FAVOURITES_FAILURE,REMOVE_FROM_FAVOURITES_REQUEST,REMOVE_FROM_FAVOURITES_SUCCESS,REMOVE_FROM_FAVOURITES_FAILURE
} from '../constants/constants'


export const getFavouritesList = () => {
    return async (dispatch) => {
        try {
            dispatch({type:GET_FAVOURITES_REQUEST});

            dispatch({
                type:GET_FAVOURITES_SUCCESS
            });

            
        }catch(error) {
            dispatch({
                type:GET_FAVOURITES_FAILURE,
                payload:error
            });   
        }
    } 
}

export const addFavourites = (data) => {
    return async (dispatch) => {
        try {
            dispatch({type:ADDTO_FAVOURITES_REQUEST});

            dispatch({
                type:ADDTO_FAVOURITES_SUCCESS,
                payload:data
            })
        }catch(error) {
            dispatch({
                type:ADDTO_FAVOURITES_FAILURE,
                payload:error
            });   
        }
    } 
}


export const deleteFavourites = (item) =>{
    return async (dispatch) => {
        try {
            dispatch({type:REMOVE_FROM_FAVOURITES_REQUEST});

            dispatch({
                type:REMOVE_FROM_FAVOURITES_SUCCESS,
                payload:item.email
            })
        }catch(error) {
            dispatch({
                type:REMOVE_FROM_FAVOURITES_FAILURE,
                payload:error
            });   
        }
    } 
    
}