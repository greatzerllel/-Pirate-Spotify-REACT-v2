import React from "react";
const Titulo = ({name, className})=>{
    return(
        <>
        <div className={className}>
        <h1>{name}</h1>
        </div>
        </>
    )
}
export default Titulo;