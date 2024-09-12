import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import Tools from "./components/Tools.js";
import SimpleWay from "./components/SimpleWay.js";
import ImportList from "./components/ImportList.js";
import ExportandShare from "./components/ExportandShare.js";
import AffordablePrice from "./components/AffordablePrice.js";
import Download from "./components/Download.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import { ArrowUp } from 'lucide-react';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Tools />
      <SimpleWay />
      <ImportList />
      <ExportandShare />
      <AffordablePrice />
      <Download />
      <Contact />
      <Footer />
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#0d9cea] hover:bg-[#0c8cd3] text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;