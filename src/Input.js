import React, {useState} from "react";
import List from './List'
import './List.css'
export default () =>{
    const[name, setName]= useState("")
    const [list, setList]= useState([])
    function addItem(){
        setList([...list,name])
        setName("")
    }
    function removeItem(id){
        setList(list.filter((item,index)=>{if(index !== id) return item}))
    }
    return(
        <div className="Form">
            <input type="text" value={name} placeholder="add a new todo..." onChange={e => setName(e.target.value)}/>
            <button onClick={addItem}>Add Item</button>
            <ul className="Items">{list.map((item,index)=> <List key={index} id={index} item={item} remove={removeItem}></List>)}</ul>
        </div>
    )
}