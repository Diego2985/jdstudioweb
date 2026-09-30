import { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import VisualConcepts from "./Pages/VisualConcepts";
import VirtualCards from './Pages/VirtualCards';
import Contact from './Pages/Contact';
import DigitalCard from './Pages/DigitalCard';
import DarkNeonDemo from './Pages/DarkNeonDemo';
import MinimalWhiteDemo from './Pages/MinimalWhiteDemo';
import CorporatePremiumDemo from './Pages/CorporatePremiumDemo';
import CreativeGradientDemo from './Pages/CreativeGradientDemo';
import LuxuryBlackDemo from './Pages/LuxuryBlackDemo';
import DesarrolloWeb from './Pages/DesarrolloWeb';
import ConceptDemo from './Pages/ConceptDemo';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (   
      <Router>
        <div className="flex flex-col min-h-screen">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />              
              <Route path="/projects" element={<Projects />} />
                <Route path="/visual-concepts" element={<VisualConcepts />} />
                <Route path="/tarjetas-virtuales" element={<VirtualCards />} />
                <Route path="/tarjetas-virtuales/dark-neon" element={<DarkNeonDemo />}/>
                <Route path="/tarjetas-virtuales/minimal-white" element={<MinimalWhiteDemo />}/>
                <Route path="/tarjetas-virtuales/corporate-premium" element={<CorporatePremiumDemo />}/>
                <Route path="/tarjetas-virtuales/creative-gradient" element={<CreativeGradientDemo />}/>
                <Route path="/tarjetas-virtuales/luxury-black" element={<LuxuryBlackDemo />}/>  
                <Route path="/visual-concepts/demo/:conceptId" element={<ConceptDemo />} />
              <Route path="/desarrollo-web" element={<DesarrolloWeb />} />            
              <Route path="/tarjeta-digital" element={<DigitalCard />} />
              <Route path="/contact" element={<Contact />} />              
            
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
  
  export default App;
  
