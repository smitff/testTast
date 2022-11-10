import NavigationService from '../../navigation/Navigationservice'
import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE} from '../constants/constants'


export const login = (email,password) => {
    return async (dispatch) => {
        try {
            
            dispatch({type:LOGIN_REQUEST});

            if(email==="" && password===""){
                dispatch({
                    type:LOGIN_SUCCESS,
                    payload:email
                });
            }
            }catch(error) {
            dispatch({type:LOGIN_FAILURE});
        }
    }
}











































