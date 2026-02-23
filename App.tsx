import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PatternDivider from './components/PatternDivider';

const App: React.FC = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <PatternDivider />
        <About />
        <PatternDivider />
        <Experience />
        <PatternDivider />
        <Projects />
      </main>
      <Contact />
    </div>
  );
};

export default App;
