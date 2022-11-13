// with rsc (react statless component) we can create all lignes bellow
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>

        {/* path="*" is when there is an error (like 404) */}
        <Route path="*" element={<h1>Error 404</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;