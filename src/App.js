import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Project from './components/project';
import AboutMe from './components/aboutme';  // Importing AboutMe component
import Skills from './components/skills';    // Importing Skills component
import Contact from './components/contact';  // Importing Contact component
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      <AboutMe />

      <Skills />

      <Project />

      <button className="resume-button">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          RESUME
        </a>
      </button>

      {/* Including the Contact component */}
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
