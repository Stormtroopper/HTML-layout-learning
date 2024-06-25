import React, { Component } from "react";
import cartstyle from'../index.module.css'
import {connect}from 'react-redux'
export class PurchaseCL extends Component {
  render() {
    return (
      <div className={cartstyle.customDiv}>
        <h2>Purchase Class Component</h2>
        <hr />
        <select onChange={(e)=>this.props.purchaseHandler(e)} >
          {this.props.products.map((prod, index) => {
            return (
              <option value={prod.price} id={index}>
                {prod.p_name}-${prod.price}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
const actionPurchase=(e)=>{
    let pname=e.target.options[e.target.selectedIndex].text;
    let price=e.target.value;
    let obj={pname,price}
    return({type:"Purchase_Action",payLoad:obj})
}
const mapStatetoProps=(state)=>{
    return{
        products:state.products
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        purchaseHandler:(e)=>dispatch(actionPurchase(e))
    }
}
export default connect(mapStatetoProps,mapDispatchToProps)(PurchaseCL);
