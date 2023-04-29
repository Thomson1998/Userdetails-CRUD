import React from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../core/base";

export default function UserComponent({user, setUser}){
    const history = useHistory()
    // Functionality
    const deleteUser = (idx)=>{
     const alterList = user.filter((per)=>per.id !== idx)
     setUser(alterList) 
    } 
    return(
        <BaseApp
        title="Student Info">
        <div className="user-content">
            {user.map((person, idx)=>(
                <div key={idx} className="user-card">
                    <h1>{person.name}</h1>
                    <p><b>Standard</b> : {person.standard}</p>
                    <p><b>Section</b> : {person.section}</p>
                    <p><b>Rank</b> : {person.rank}</p>

                    <div className="btn-group">
                        <button className="btn edit-btn"
                        onClick={()=>history.push(`/edituser/${person.id}`)}
                        >Edit</button>

                        <button className="btn view-btn"
                        onClick={()=>history.push(`/user/${idx}`)}
                        >View</button>

                        <button className="btn del-btn"
                        onClick={()=>deleteUser(person.id)}
                        >Delete</button>
                    </div>
                </div>
            ))}
        </div>
        </BaseApp>
    );
}