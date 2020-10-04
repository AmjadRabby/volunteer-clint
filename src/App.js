import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RegisterDetail from './components/RegisterDetail/RegisterDetail';

export const UserContext = createContext();

function App() {
  const [loggedInVolunteer, setLoggedInVolunteer] = useState({})
  // const [volunteerTasks, setVolunteerTasks] = useState([])
  return (
    <UserContext.Provider value={[loggedInVolunteer, setLoggedInVolunteer]}>
      <p>Name: {loggedInVolunteer.name}</p>
      
      <Router>
        <Switch>
        <Route  exact path="/">
            <Home />
          </Route>
          <Route path="/home">
             <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>                    
          <PrivateRoute path="/register/:id">
            <Register/>
          </PrivateRoute>
          <Route path="/registerDetail">
            <RegisterDetail/>
          </Route>
        </Switch>
      </Router>    
    </UserContext.Provider>
  );
}

export default App;
