
export const LOGOUT = "LOG_OUT"
export const logoutstat =  () =>{
    
    console.log("User is logged out")
    return {
        
        type: LOGOUT,
        payload:{
            status2 : false         
       }
    }
}
