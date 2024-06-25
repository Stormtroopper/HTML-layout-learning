import React from "react";
import { useSelector,useDispatch } from "react-redux";
// import cartstyle from'../index.module.css'
function Cart() {
  const carts = useSelector((state)=>state.pr.cart);
  const loginDetails=useSelector(state=>state.lr.loginDetails)
  const dispatch=useDispatch();
  const deleteItem=(index,price)=>{
    dispatch({type:'Delete_Item',payLoad:{index,price}});
  }
  // const products=useSelector((state)=>state.products);
  return (
    // <div>Cart</div>
    <>
      <div className="customDiv">
        <h3>Cart Component-{loginDetails}</h3>
        <hr />
        <ul>

          {carts.map((prod, index) => {
            return (
              <li key={index}onClick={()=>deleteItem(index,prod.price)}> 
                {prod.pname}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Cart;
