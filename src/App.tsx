import React, { useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './GlobalStyles.css';

import { myContext } from './Context';

import AuthRoute from './AuthRoute';

import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import Navbar from './components/Navbar/Navbar';

function App() {
  const userObject = useContext(myContext);
  console.log(userObject);

  return (
    <Router>
      <Navbar />
      <AuthRoute exact path="/login" component={LoginPage} />
      <Route exact path="/" component={HomePage} />
    </Router>
  );
}

export default App;
