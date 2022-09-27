import React from "react";
const Titulo = ({name, classThing})=>{
    return(
        <>
        <div className={classThing}>
        <h1>{name}</h1>
        </div>
        </>
    )
}
export default Titulo;