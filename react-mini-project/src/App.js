import './App.css';
import { Route } from "react-router-dom";
import Home from './components/Home';
import WatchLater from './components/WatchLater';
import VideoDetails from './components/VideoDetails';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">

      <header>
          
      </header>
      <div>
        <Navigation/>
        <Route path="/WatchLater" component={WatchLater} />
        <Route path="/VideoDetails" component={VideoDetails} />
      </div>
      <div className="cards-container">
      <Route exact path="/" component={Home} />
      </div>
    </div>
  );
}

export default App;
