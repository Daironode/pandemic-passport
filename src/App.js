import './components/home/HomeStyles.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../src/components/home/home';

function App() {
  return (
      <BrowserRouter>
          <div>
              <Route exact path="/" component={Home} />
          </div>
      </BrowserRouter>
  )
}

export default App;
