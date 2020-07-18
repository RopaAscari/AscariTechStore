export const LOGIN = "LOG_IN"

export const loginstat =  (vari,e) =>{
    
    console.log("User login status is",vari)
    return {
        
        type: LOGIN,
        payload:{
            status : vari,         
       }
    }
}
