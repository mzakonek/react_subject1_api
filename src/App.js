import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import userDetails from './components/UserDetails';
import UserList from './components/UserList';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/user/:id" component={userDetails} />
          <Route path="/" exact component={UserList} />
        </Switch>
      </Router>
    </div>
  );
}



