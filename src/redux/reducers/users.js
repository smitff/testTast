import {GET_USERS_REQUEST,GET_USERS_SUCCESS,GET_USERS_FAILURE} from '../constants/constants'
const initialState = {
    loading:false,
    users:[],
    error:'',
    message:'',
    page:1,
    loadExtradata:false
}

const users = (state = initialState,action) => {
    switch(action.type){
        case GET_USERS_REQUEST:
            return {
                ...state,
                loading:state.page===1?true:false,
                loadExtradata:state.page>1?true:false
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                loading:false,
                users:[...state.users,...action.payload],
                message:'Users fetched successfully',
                error:null,
                page:state.page+1,
                loadExtradata:false
            }
        case GET_USERS_FAILURE:
            return {
                ...state,
                loading:false,
                message:"Error while fetching users",
                error:action.payload,
                loadExtradata:false

            }
        default: 
            return state
    }
}

export default users;