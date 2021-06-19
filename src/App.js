import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import Orders from './Orders';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe("pk_test_51J3OmsFNt603UvouAgcwg34PlNqHzfjiv6UuVhHFXx9ZwdJgFeK674ReGa5NcRoCcnbeJaQiEaV0TnA2cIE0mgJP00OT7x9l0g");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads.
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser)

      if (authUser) {
        // The user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // The user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
       
          <Switch>

          <Route path="/orders">  
              <Header />             
              <Orders />
            </Route>

            <Route path="/login">              
              <Login />
            </Route>

            <Route path="/checkout"> 
              <Header />             
              <Checkout />
            </Route>

            <Route path="/payment"> 
              <Header />
              <Elements stripe={promise}>
                <Payment />           
              </Elements>
            </Route>

            <Route path="/">
              <Header />
              <Home />
            </Route>

          </Switch>      
      </div>
    </Router>
  );
}

export default App;
