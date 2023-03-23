import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import BaseApp from "../core/base";

export const EditUser = ({user, setUser}) => {
    const [idx, setidx] = useState("");
    const [name, setName] = useState("");
    const [batch, setBatch] = useState("");
    const [email, setEmail] = useState("");
    const [experience, setExperience] = useState();

    const {id} = useParams();
    const history = useHistory()
    const selectedUser = user.find((per)=>per.id === id)

    useEffect(()=>{
     setidx(selectedUser.id)
     setName(selectedUser.name)
     setBatch(selectedUser.batch)
     setEmail(selectedUser.email)
     setExperience(selectedUser.experience)
    },[])

    const updateUser = () =>{
       const editIndex = user.findIndex(per => per.id === id)
       const editedData = {
       id : idx,
        name,
        batch,
        email,
        experience,
       } 

       user[editIndex] = editedData
       setUser([...user])
       history.push("/")
    }
  
    return(
        <BaseApp
        title={"Edit The User Info"}>  
                  <div>
            
            <input 
            placeholder="ID"
            value={idx}
            type="number"
            onChange={(event)=>setidx(event.target.value)}
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
            onClick={updateUser}
            >Edit</button>
        
    </div>
        </BaseApp>
    );
}