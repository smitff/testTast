import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE} from '../constants/constants'


const INITIAL_STATE = {
	loading: false,
    message:null,
    error:null,
    email:null,
};

const login = (state= INITIAL_STATE,action) =>{
    switch(action.type){
        case LOGIN_REQUEST:
            return {
                ...state,
                loading:true,
                message:null,
                error:null,
                email:null,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading:false,
                message:'Login success',
                error:null,
                email:action.payload,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loading:false,
                error:action.payload,
                message:"Login failed",
                email:null,
            }
        default:
            return state;
            
    }
}

export default login;































