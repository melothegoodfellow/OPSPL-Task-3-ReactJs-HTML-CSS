import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

import { BrowserRouter, Route, Link } from "react-router-dom";

import dotenv from "dotenv";

import HomePage from "./pages/home.page";
import FavoritePage from "./pages/favorites.page";

dotenv.config();

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <nav className="nav-links">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/favorites">
            Favorites
          </Link>
        </nav>
        <main className="main">
          <div className="content">
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/favorites" component={FavoritePage} />
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
