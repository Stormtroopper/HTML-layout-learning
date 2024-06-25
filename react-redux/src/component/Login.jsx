import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import cartstyle from'../index.module.css'
import { validateUser } from '../store/action';
function Login() {
  const users=useSelector(state=>state.lr.users);
  const dispatch=useDispatch();
  const loginHandler=(e)=>{
    let loginDet=e.target.options[e.target.selectedIndex].text;
    dispatch(validateUser(loginDet))
    }  
  return (
        <>
            <div className={cartstyle.customDiv}>
                <h2>Login Component</h2>
                <hr />
                <select onChange={(e)=>loginHandler(e)}>
                    {
                        users.map((user,index)=>{
                            return(
                                <option key={index}>
                                    {user}
                                </option>
                            )
                        })
                    }
                </select>
            </div>        
        </>
  )
}

export default Login