import { Fragment, React } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/NavBar.js";
import Events from "./components/Events.js";
import SignIn from "./components/SignIn.js";
import SignUp from "./components/SignUp.js";
import ProtectedRoute from "./components/ProtectedRoute.js";
import axios from "axios";

class App extends React.Component {
  state = {
    events: [],
    todos: [],
    transactions: [],
    user: {},
    cred: {},
    token: null,
    loading: false,
    alert: null,
    loggedIn: false
  };

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route
              exact
              path="/SignIn"
              render={props => (
                <Fragment>
                  <SignIn onSignIn={onSignIn} setAlert={showAlert} />
                </Fragment>
              )}
            />
            <Route
              exact
              path="/SignUp"
              render={props => (
                <Fragment>
                  <SignUp onSignUp={onSignUp} setAlert={showAlert} />
                </Fragment>
              )}
            />
            <Route
              exact
              path="/events"
              render={props => (
                <Fragment>
                  <Events />
                </Fragment>
              )}
            />
            <ProtectedRoute path="/home" component={Home} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
