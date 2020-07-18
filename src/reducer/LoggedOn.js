import {LOGIN} from '../action/LoginAction'
import { LOGOUT } from '../action/LogOut Action';

const initial = {
    track: false
}

 function logreducer  (state = initial, action)  {
    switch (action.type) {
        case LOGIN:
        {
            return {...state,track: action.payload.status}           
        }
        case LOGOUT:
            {
                return {...state,track: action.payload.status2}
            }
        default: 
            return state;    
     }
};
export default logreducer;