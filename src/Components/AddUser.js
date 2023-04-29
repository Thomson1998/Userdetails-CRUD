import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../core/base";

export function AddUser({user, setUser}){
    const history = useHistory()
    const [id, setid] = useState("");
    const [name, setName] = useState("");
    const [standard, setStandard] = useState("");
    const [section, setSection] = useState("");
    const [rank, setRank] = useState();

    const addNewUser = ()=>{
        const newUser = {
        id,
        name,
        standard,
        section,
        rank,
        }
        console.log(newUser)
       setUser([...user, newUser]) 
       history.push("/")

    }
    return(
        <BaseApp
        title={"Add A New Student"}>  
                  <div>
            
            <input 
            placeholder="ID"
            value={id}
            type="number"
            onChange={(event)=>setid(event.target.value)}
            />
            <input 
            placeholder="Name"
            value={name}
            type="text"
            onChange={(event)=>setName(event.target.value)}
            />
            <input 
            placeholder="Standard"
            value={standard}
            type="text"
            onChange={(event)=>setStandard(event.target.value)}
            />
            <input 
            placeholder="Section"
            value={section}
            type="text"
            onChange={(event)=>setSection(event.target.value)}
            />
            <input 
            placeholder="Rank"
            value={rank}
            type="number"
            onChange={(event)=>setRank(event.target.value)}
            />
            <button
            onClick={addNewUser}
            >Add</button>
        
    </div>
        </BaseApp>


    );
}