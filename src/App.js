import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Features from './components/Features';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
