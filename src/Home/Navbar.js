import React from "react";
import Login from "../Registration/Login/Login";
// import Signup from '../Registration/SignUp/SignUp'
function Navbar() {
  return (
    <div>
      <Login />

      {/* <Signup /> */}
    </div>
  );
}

export default Navbar;

// import React, { Component } from "react";
// import { Router, Switch, Route } from "react-router-dom";
// import Home from "./components/home/Home";
// import Products from './components/products/Products';
// import history from './history';

// export default class Routes extends Component {
//     render() {
//         return (
//             <Router history={history}>
//                 <Switch>
//                 <Route path="/" exact component={Home} />
//                     <Route path="/Home" exact component={Home} />
//                     <Route path="/Products" component={Products} />
//                 </Switch>
//             </Router>
//         )
//     }
// }
