import Header from "./Header/Header";
import "./App.css";
import Home from "./Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout/Checkout";
import Login from "./Subtotal/Login";
import { useStateValue } from "./StateProvider";
import React, { useEffect } from 'react';
import { auth } from './firebase'
import Payment from "./Payment/Payment";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders/Orders";


const promise= loadStripe('pk_test_51IQ6IdJgMjh5Y2RuJcF5G0zvAEEk6R3ZEbHb0KZcBVL6qSs6nfvvXKUHeQzDy8KqAV0qF8RtqmePTMm2wm7C7vJ500j3KNujBU');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
          <Header />
            <Orders />
          </Route>
          <Route path="/payment">
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
