import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../core/base";

export function AddUser({user, setUser}){
    const history = useHistory()
    const [id, setid] = useState("");
    const [name, setName] = useState("");
    const [batch, setBatch] = useState("");
    const [email, setEmail] = useState("");
    const [experience, setExperience] = useState();

    const addNewUser = ()=>{
        const newUser = {
        id,
        name,
        batch,
        email,
        experience,
        }
        console.log(newUser)
       setUser([...user, newUser]) 
    //    setid("");
    //    setName("");
    //    setBatch("");
    //    setEmail("");
    //    setExperience("");
       history.push("/")

    }
    return(
        <BaseApp
        title={"Add A New User"}>  
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
            placeholder="Batch"
            value={batch}
            type="text"
            onChange={(event)=>setBatch(event.target.value)}
            />
            <input 
            placeholder="Email"
            value={email}
            type="text"
            onChange={(event)=>setEmail(event.target.value)}
            />
            <input 
            placeholder="Experience"
            value={experience}
            type="number"
            onChange={(event)=>setExperience(event.target.value)}
            />
            <button
            onClick={addNewUser}
            >Add</button>
        
    </div>
        </BaseApp>


    );
}