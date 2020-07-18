import * as Cookies from "js-cookie";
//import {React,useContext,createContext} from 'react';

export const SetCookieSession = (session) => {
    Cookies.remove("session");
    Cookies.set("session", session, { expires: 10 });
};

export const GetCookieSession = () => {
    const sessionCookie = Cookies.get("session");
    if (typeof(sessionCookie) === undefined) {
        return {};
    }
    else {
        return JSON.parse(sessionCookie);
    }
}




