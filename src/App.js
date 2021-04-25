import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CheckOut from "./components/CheckOut/CheckOut";
import Login from "./components/Login/Login";
import { useEffect } from "react";
import { auth } from "./Firebase";
import { useSateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useSateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The User is " ,authUser);
      if (authUser) {
        //just login user or user was log in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        ///logout user
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />

            <Home />
          </Route>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <CheckOut />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
