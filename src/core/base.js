import React from "react";
import { useHistory } from "react-router-dom";

export default function BaseApp({title, styles, children}){
    const history = useHistory();
    return (
        <div>
            <div>
            <div className="navstyles">
               <span>
                   <button className="nav-button"
                   onClick={()=>history.push("/adduser")}
                   >Add User</button>
                </span>
                <span>
                   <button className="nav-button"
                   onClick={()=>history.push("/")}
                   >Dashboard</button>
                </span>
            </div>
            <div className="title">{title}</div>
            </div>

            <div className="children">{children}
            <footer>
                Contact us
                <div>Email ID : user@gmail.com</div>
                <div>Phone No : 9876504321</div>
                </footer>

                </div>
        </div>
    );
}