import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from 'src/components/layout/Header';
import Body from 'src/components/layout/Body';
import Footer from 'src/components/layout/Footer';
import 'react-tabulator/lib/styles.css';
import 'react-tabulator/css/bootstrap/tabulator_bootstrap.min.css';
import 'src/assets/css/common/common.css';
import 'src/assets/css/colorthemes/default.css';
import 'src/assets/css/library/tabulator.css';
import 'src/assets/css/library/material.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'src/css/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
