import React from "react";
import Header from "src/components/layout/Header";
import Body from "src/components/layout/Body";
import Footer from "src/components/layout/Footer";
// import { BrowserRouter as Router } from 'react-router-dom';
// import "react-tabulator/lib/styles.css";
// import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css";
import "src/assets/css/common/common.css";
import "src/assets/css/colorthemes/default.css";
// import "src/assets/css/library/tabulator.css";
// import "src/assets/css/library/material.css";
import "src/css/App.css";

function App() {
  return (
    // <Router>
    <div className="App">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
    // </Router>
  );
}

export default App;
