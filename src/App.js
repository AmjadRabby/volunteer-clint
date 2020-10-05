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
import Header from './components/Header/Header';
import AdminPanel from './components/Admin/AdminPanel';
import AdminEvent from './components/Admin/AdminEvent';
import EventsAdd from './components/Admin/EventsAdd';

export const UserContext = createContext();

function App() {
  const [loggedInVolunteer, setLoggedInVolunteer] = useState({})
  return (
    <UserContext.Provider value={[loggedInVolunteer, setLoggedInVolunteer]}>
     
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
            <PrivateRoute path="/registerDetail">
              <RegisterDetail/>
            </PrivateRoute>
            <Route path="/adminPanel">
              <AdminPanel/>
            </Route>
            <Route path="/eventsAdd">
              <EventsAdd/>
            </Route>
            <Route path="/adminEvent">
              <AdminEvent/>
            </Route>
        </Switch>
      </Router>    
    </UserContext.Provider>
  );
}

export default App;
