import React from "react";
const InputButton = ({icon1, icon2, icon3, className, onClick})=>{
    return(
        <>
 
 <div className="btn-group mt-3 d-flex justify-content-center" role="group" aria-label="Basic example">
  <button type="button" className="form-control border border-0 py-3 px-5">{icon1}</button>
  <button type="button" className=' form-control border border-0 py-3 mx-2 '>{icon2}</button>
  <button type="button" className= "form-control border border-0 py-3 px-5">{icon3}</button>
</div>
      
        </>
    )
}
export default InputButton