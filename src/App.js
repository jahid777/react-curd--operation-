import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import { UserProvider } from "./Components/UserContext/UserContext";
import Delete from "./Components/Delete/Delete";
import Read from "./Components/Read/Read";
import Create from "./Components/Create/Create";
import Edit from "./Components/Create/Edit/Edit";

function App() {
  return (
    <div className="app">
      <UserProvider>
        <Router>
          <Switch>
            <Route path="/delete/:id">
              <Delete></Delete>
            </Route>
            <Route path="/read/:id">
              <Read></Read>
            </Route>
            <Route path="/create/">
              <Create></Create>
            </Route>
            <Route path="/edit/:id">
              <Edit></Edit>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
