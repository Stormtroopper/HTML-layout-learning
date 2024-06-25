import React from 'react'
import { useSelector } from 'react-redux';
function Total() {
  const total = useSelector((state)=>state.pr.total);
  return (
    <>
    <div className="customDiv">
        <h3>Total Component</h3>
        <hr />
        <h2>Total : {total}</h2>
     </div>    
    </>
  )
}

export default Total