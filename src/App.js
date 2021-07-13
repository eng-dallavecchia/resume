import { Home } from "./pages/Home/Home";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Contact } from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/resume" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route path="*">
          <Redirect to="/resume" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
