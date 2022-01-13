import "./App.css";
import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/bootstrap/js/dist/popover.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Switch, Route } from "react-router";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Vision from "./Components/Vision/Vision";
import Services from "./Components/Services/Services";
import Team from "./Components/Team/Team";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <div className="container-fluid px-0">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/aboutus" component={About} />
            <Route path="/contactus" component={Contact} />
            <Route path="/ourvision" component={Vision} />
            <Route path="/ourservices" component={Services} />
            <Route path="/ourteam" component={Team} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
