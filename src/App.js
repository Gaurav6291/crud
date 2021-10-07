import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import { BrowserRouter, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={AllUsers}>
          <AllUsers />
        </Route>
        <Route path="/add" component={AddUser}>
          <AddUser />
        </Route>   
        <Route component={NotFound}>
          <NotFound />
        </Route>   
      </Switch>
    </BrowserRouter>
  );
}

export default App;
