import { combineReducers } from "redux";
import logreducer from './LoggedOn'

export const GlobalReducers = combineReducers({
    status: logreducer
})
    
 