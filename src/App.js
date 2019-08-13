import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./routes/Header";
import Home from "./routes/Home";
import Users from "./routes/Users";
import UserProfile from "./routes/UserProfile";
import Todos from "./routes/Todos";

const App = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/users/" component={Users} />
      <Route exact path="/users/:id" component={UserProfile} />
      <Route exact path="/users/:id/todos" component={Todos} />
    </Router>
  );
};

export default App;
