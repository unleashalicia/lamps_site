import React from 'react';
import Header from './header';
import Home from './home';
import Footer from './footer';
import '../assets/css/style.css';
import '../assets/css/app.css';

const App = () => (
    <div>
        <div className="app">
            <Header/>
            <Home/>
            <Footer/>
        </div>
    </div>
);

export default App;
