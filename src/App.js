
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import TopNavBar from './components/TopNavBar';

// import Contact from './pages/Contact';

function App() {
  return (
      <>
  <TopNavBar/>
    
    <div className="App">
     
            <Switch>
                <Route exact to path="/" component={Home}  />
                <Route exact to path="/contact" component={Contact}  />
                <Route exact to path="/aboutme" component={AboutMe}  />
                <Route exact to path="/portfolio" component={Portfolio}  />
                
            </Switch>
    </div>
 
    </>
  );
}

export default App;
