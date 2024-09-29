// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Comparisons from './components/Comparisons';
import Alerts from './components/Alerts';
import News from './components/News';
import WatchList from './components/WatchList';
import './App.css'; // Optional: Import your styles here

function App() {
    return (
        <Router>
            <div className="App">
                <Menu />
                <Routes>
                    <Route path="/" element={<Comparisons />} />
                    <Route path="/alerts" element={<Alerts />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/watchlist" element={<WatchList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
