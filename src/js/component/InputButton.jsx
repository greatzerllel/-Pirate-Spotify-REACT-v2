import React from "react";
const InputButton = ({icon1, icon2, icon3, className, onClick})=>{
    return(
        <>
 
 <div className="btn-group d-flex justify-content-center" role="group" aria-label="Basic example">
  <button type="button" className={className} >{icon1}</button>
  <button type="button" className={className}>{icon2}</button>
  <button type="button" className={className}>{icon3}</button>
</div>
      
        </>
    )
}
export default InputButton