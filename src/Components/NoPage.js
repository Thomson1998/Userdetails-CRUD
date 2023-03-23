import React from "react";
import { useHistory } from "react-router-dom";

export function NoPage(){
    const history = useHistory()
    return(
      <div>
        <h1>This Page No Longer Exists</h1>
        <button className="nav-button"
         onClick={()=>history.push("/")}>
           Dashboard   
        </button>
      </div>   
    );
}