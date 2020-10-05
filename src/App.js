import React, { createContext, useState } from 'react';
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
import VolunteerSelectedOptions from './components/VolunteerSelectedOptions/VolunteerSelectedOptions';
import Admin from './components/Admin/Admin';
import VolunteerRegList from './components/VolunteerRegList/VolunteerRegList';
import EventSelected from './components/EventSelected/EventSelected';

export const UserContext = createContext();
function App() {
  const [userLoggedIn, setUserLoggedIn] = useState({})
  const [work, setWork] = useState({})
  return (
    <UserContext.Provider value={[userLoggedIn, setUserLoggedIn, work, setWork]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/event">
            <EventSelected></EventSelected>
          </PrivateRoute>
          {/* <Route exact  path="/form">
            <VolunteerForm></VolunteerForm>
          </Route> */}
          <PrivateRoute exact path="/selected/:volunteerKey">
            <VolunteerForm></VolunteerForm>
          </PrivateRoute>
          <PrivateRoute exact path="/selectedOptions/:volunteerKey">
            <VolunteerSelectedOptions></VolunteerSelectedOptions>
            </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/regList">
            <VolunteerRegList></VolunteerRegList>
          </Route>
          <Route exact path="/eventSelected">
            <EventSelected></EventSelected>
          </Route>
          <Route exact path="/admin">
            <Admin></Admin>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
