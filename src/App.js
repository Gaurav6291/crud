import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import EditUser from "./components/EditUser";


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
        <Route path="/edit/:id" component={EditUser}>
          <EditUser />
        </Route>   
        <Route component={NotFound}>
          <NotFound />
        </Route>   
      </Switch>
    </BrowserRouter>
  );
}

export default App;
