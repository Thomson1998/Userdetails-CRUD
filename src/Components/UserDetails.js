import React from "react";
import { useParams } from "react-router-dom";
import BaseApp from "../core/base";

export function UserDetails({user}){
    const {id} = useParams()
    const person = user[id]
    return(
       <BaseApp
       title = {"User Info"}>
        <div className="user-content">
            
                <div className="user-card">
                    <h1>{person.name}</h1>
                    <p>Standard : {person.standard}</p>
                    <p>Section : {person.section}</p>
                    <p>Rank : {person.rank}</p>
                </div>
        </div>   
       </BaseApp> 
    );
}