import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

class App extends React.Component{
    render() {
        return(
           <div className='container'>
               <Navigation/>
               <div className='content'>
                   <Switch>
                   <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={Contact} />
                        <Route component={Home} />
                   </Switch>
               </div>
               <Footer />
           </div>
        )
    }
}

export default App;