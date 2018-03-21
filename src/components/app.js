import React from 'react';
import Header from './header';
import Main from './main';
import '../assets/css/style.css';

const App = () => (
    <div>
        <div className="app">
            <Header/>
            <Main/>
        </div>
    </div>
);

export default App;
