import React from 'react';
import Header from './header';
import Footer from './footer';
import Home from './home';
import Contact from './contact';
import { Route, Switch } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/style.css';
import '../assets/css/app.css';

const App = () => (
    <div>
        <div className="app">
            {/* <Header/> */}
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/contact" component={Contact} />
            </Switch>
            <Footer/>
        </div>
    </div>
);

export default App;
