import './components/home/HomeStyles.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../src/components/home/home';
import MapView from '../src/components/map/mapView';
import Auth from "./components/auth/login";
import Spaces from "./components/space/space";

function App() {
  return (
      <BrowserRouter>
          <div>
              <Route exact path="/" component={Auth} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/space" component={Spaces} />
              <Route exact path="/map" component={MapView} />
          </div>
      </BrowserRouter>
  )
}

export default App;
