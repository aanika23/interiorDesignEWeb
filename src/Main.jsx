import React, { Component } from 'react';
import Home from './components/home';
// import './css/home.css';
// import "@fontsource/amatic-sc";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
export default class Main extends Component {
    state = {  } 
    render() { 
        return (
            <BrowserRouter>
                <Navbar></Navbar>
                <div id="container">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
           
        );
    }
}
 