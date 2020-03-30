import React, { Fragment, Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
// import NoWatch from './components/NoWatch';
import Projects from './components/Projects';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() { 
    return (
      <React.Fragment>
                <NavBar />

        <Router>
          <Switch>
          
    <article className="container">
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
      {/* <Route component={NoWatch} /> */}



    

    </article>


    </Switch>
    </Router>
    </React.Fragment>

  );
    }
}

export default App;
