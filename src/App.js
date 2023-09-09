
import {
  BrowserRouter as Router,

  Route,
 
} from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
<Router>
    <Switch>
      <Route  exact path="/"><Home/></Route>
      <Route  path="/register"><Register/></Route>
      <Route  path="/login"><Login/></Route>
      <Route  path="/profile/:username"><Profile/></Route>

</Switch>




</Router>




  ) 

  
}

export default App;
