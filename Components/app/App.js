import React from 'react';
import './App.css';
import Header from '../header/Header';
import SideBar from '../sideBar/SideBar';
import Widgets from '../widgets/Widgets';
import Feed from '../feed/Feed';

function App() {
    return (
        <div className="app">
            <Header />
            <div className="app__body">
                <SideBar />
                <Feed />
                <Widgets />
            </div>
        </div>
    )
}

export default App
