export const validateUser=(loginDetails)=>{
    return dispatch=>{

        setTimeout(()=>{
            dispatch({type:"LOGIN",loginDetails:loginDetails})
        },1500)
    }
}