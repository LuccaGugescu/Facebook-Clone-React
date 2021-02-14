import React from 'react';
import './App.css';
import Header from '../header/Header';
import SideBar from '../sideBar/SideBar';
import Widgets from '../widgets/Widgets';
import Feed from '../feed/Feed';
import Login from '../login/Login';
import { useStateValue } from '../store/StateProvider';


function App() {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="app">
            {!user? (
            <Login />
            ) : (
            <>
                <Header/>
                <div className="app__body">
                    <SideBar />
                    <Feed />
                    <Widgets />
                </div>
            </>
            )}
        </div>
    )
}

export default App
