import React from "react";
export default({key, id, item, remove}) =>{
    return(
        <>
            <li key={key} onClick={()=>{remove(id)}} id="items">{item}</li>
        </>
    )
}