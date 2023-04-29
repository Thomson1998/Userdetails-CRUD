import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { AddUser } from './Components/AddUser';
import { EditUser } from './Components/EditUser';
import { NoPage } from './Components/NoPage';
import UserComponent from './Components/UserComponent';
import { UserDetails } from './Components/UserDetails';
import BaseApp from './core/base';
import { data } from './Data/data';
import TeacherComponent from './Components/TeacherComponent';


function App() {
  const [user, setUser] = useState(data)
  return (
    <div className="App">

   <Switch>

    <Route exact path="/">
    <UserComponent
        user={user}
        setUser={setUser}/>
    </Route>

    <Route path="/adduser">
       <AddUser
           user={user}
           setUser={setUser}/>
    </Route>
    
    <Route path="/teacherdetails">
       <TeacherComponent/>
    </Route>

    <Route path="/edituser/:id">
     <EditUser
        user={user}
        setUser={setUser}/>
    </Route>

    <Route path="/user/:id">
    <UserDetails user={user}/>
    </Route>

    <Route path="/students">
       <Redirect path="/"/>
    </Route>

    <Route path="**">
       <NoPage/>
    </Route>


   </Switch>

  
    </div>
  );
}

export default App;


