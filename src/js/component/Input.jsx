import React from "react";
const Input = ({className, name, onClick, url})=>{
    return(
        <div className="d-grid gap-2 col-6 mx-auto ">
        <button className={className} onClick={onClick} type="button" url={url}>{name}</button>
      </div>
        
    )
}
export default Input