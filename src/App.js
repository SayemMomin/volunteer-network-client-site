import React, { createContext, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import VolunteerForm from './components/VolunteerForm/VolunteerForm';
import Admin from './components/Admin/Admin';
import VolunteerRegList from './components/VolunteerRegList/VolunteerRegList';
import EventSelected from './components/EventSelected/EventSelected';

export const UserContext = createContext();
export const EventContext = createContext();
function App() {
  const [userLoggedIn, setUserLoggedIn] = useState({})
  const [event, setEvent] = useState([])
  useEffect(() => {
    fetch('https://obscure-everglades-48660.herokuapp.com/events')
    .then(res => res.json())
    .then(data => setEvent(data))
},[])
  return (
    <UserContext.Provider value={[userLoggedIn, setUserLoggedIn]}>
      <EventContext.Provider value={[event, setEvent]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/selected/:id">
            <VolunteerForm></VolunteerForm>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/regList">
            <VolunteerRegList></VolunteerRegList>
          </Route>
          <PrivateRoute exact path="/eventSelected">
            <EventSelected></EventSelected>
          </PrivateRoute>
          <Route exact path="/admin">
            <Admin></Admin>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      </EventContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
