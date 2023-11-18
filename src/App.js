import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import SourceCode from './components/SourceCode';
import Footer from './components/Footer';
import './style/app.css';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sourceCode" element={<SourceCode />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
