import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import cartstyle from'../index.module.css'

export default function Purchase() {
    const products=useSelector(state=>state.pr.products)
    const dispatch=useDispatch();
    const loginDetails=useSelector(state=>state.lr.loginDetails)
    const purchaseHandler=(e)=>{
    console.log('Clicked');
      let pname=e.target.options[e.target.selectedIndex].text;
      let price=e.target.value;
      // let cart=[...cart]
      let obj={pname,price}
    console.log(obj);
      dispatch({type:'Purchase_Action',payLoad:obj})
    }
  return (
<>

<div className={cartstyle.customDiv}>
  <h3>Purchase Component- {loginDetails}</h3>
    <hr />
    <select onChange={purchaseHandler}>
      {products.map((prod, index) => {
        return (
          <option value={prod.price} id={index}>
            {prod.p_name}-${prod.price}
          </option>
        );
      })}
    </select>
  </div>
</>
  )
}
