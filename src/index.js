import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Header from '../src/pages/Components/header.jsx'
import Home from '../src/pages/home/home';
import Recipes from '../src/pages/Recipes/Recipes';
import Drinks from '../src/pages/Drinks/Drinks.jsx';
import Upload from '../src/pages/Upload/Upload';

const App = () => {
  return (
    <Router>
      <Header/>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </React.StrictMode>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
