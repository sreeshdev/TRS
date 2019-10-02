import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import LoginForm from "./login.jsx";
import NavBar from "./navBar.jsx";
import RegisterForm from "./register.jsx";
import ForgotForm from "./forgot.jsx";
import BillGeneration from "./Back office Billing/BillGeneration.jsx";
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/forgot" component={ForgotForm} />
          <Route path="/BillGeneration" component={BillGeneration} />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
