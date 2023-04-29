import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import BaseApp from "../core/base";

export const EditUser = ({user, setUser}) => {
    const [idx, setidx] = useState("");
    const [name, setName] = useState("");
    const [standard, setStandard] = useState("");
    const [section, setSection] = useState("");
    const [rank, setRank] = useState();

    const {id} = useParams();
    const history = useHistory()
    const selectedUser = user.find((per)=>per.id === id)

    useEffect(()=>{
     setidx(selectedUser.id)
     setName(selectedUser.name)
     setStandard(selectedUser.standard)
     setSection(selectedUser.section)
     setRank(selectedUser.rank)
    },[])

    const updateUser = () =>{
       const editIndex = user.findIndex(per => per.id === id)
       const editedData = {
       id : idx,
        name,
        standard,
        section,
        rank,
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
            onClick={updateUser}
            >Edit</button>
        
    </div>
        </BaseApp>
    );
}