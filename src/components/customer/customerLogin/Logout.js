import history from '../../../router/history'
import * as Cookies from "js-cookie";
import {store} from '../../../index'
import {logoutstat} from '../../../action/LogOut Action'

export const LogOut = () =>
{
  store.dispatch(logoutstat())
    Cookies.remove("session");
    history.push("/Login");
}