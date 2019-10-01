import React, { useState } from 'react';
import Home from './Home';
import About from './About';
import Users from './Users';
import Login from './Login';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// if(route==="home"){
//   //eftir ?
// }
// else{
//   //eftir :
// }
function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = ()=>{

    setIsLoggedIn(true);
  }
  const logout = ()=>{
    setIsLoggedIn(false);
  }
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            {isLoggedIn?
              <li>
                <Link to="/users">Users</Link>
              </li>
            :""}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/login">
            <Login login={login} logout={logout} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
  // (
  //   <div className="App">
  //   <button onClick={()=>setRoute("home")}>go to home</button>
  //   <button onClick={()=>setRoute("about")}>go to about</button>
  //     {route==="home"?<Home/>:""}
  //     {route==="about"?<About/>:""}
  //   </div>
  // );
}

export default App;
