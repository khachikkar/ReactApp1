
import './App.css';

import React from 'react';
import Hero from './Components/Hero/Hero';
import Nav from './Components/Nav/Nav';
import Companies from './Components/Companies/Companies';
import ProductList from './Components/ProductList/ProductList';
import Value from './Components/Value/Value';
import Contact from './Components/Contact/Contact';
import GetStarted from './Components/GetStart/GetStart';
import Footer from './Footer/Footer';


function App() {


  return (
    <div className="App">
     <Nav />
     <Hero />
     <Companies />
     <ProductList />
     <Value />
     <Contact />
     <GetStarted />
     <Footer />
    </div>
  );
}

export default App;