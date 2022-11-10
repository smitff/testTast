import NavigationService from '../../navigation/Navigationservice'
import {GET_USERS_REQUEST,GET_USERS_SUCCESS,GET_USERS_FAILURE} from '../constants/constants'
import {baseUrl} from '../../Services/Uri'


export function getUsersList(page) {
    return async dispatch => {
      try {
        dispatch({
            type: GET_USERS_REQUEST,
        })
          const response = await fetch(`${baseUrl}/?results=10&page=${page}`, {}); 
          const data = await response.json();
        
          dispatch({
            type: GET_USERS_SUCCESS,
            payload:data.results  
        })
      } catch (err) {
        console.log(err,'ooo')
        dispatch({
            type: GET_USERS_FAILURE,
            payload:err.message
        })
      }
    }
  }