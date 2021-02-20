import './components/home/HomeStyles.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../src/components/home/home';
import MapView from './components/map/MapView';

function App() {
  return (
      <BrowserRouter>
          <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/map" component={MapView} />
          </div>
      </BrowserRouter>
  )
}

export default App;
