import { combineReducers } from "redux"

import login from "./login"
import favourites from "./favourites"
import users from "./users"


export default combineReducers({login:login,favourites:favourites,users:users})
