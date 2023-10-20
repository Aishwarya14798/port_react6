
import './App.css';
import React from 'react';
function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <h1>Bandaru Aishwarya</h1>
      </header>

      <div className="content">
        <section className="section">
          <h2>Introduction</h2>
          <p>
            I am Aishwarya, pursuing B.Tech in vitap university, love to create deep learning models.
          </p>
        </section>

        <section className="section">
          <h2>Skills</h2>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>Data Structures</li>
            <li>HTML & CSS</li>
            <li>SQL</li>
            <li>JavaScript</li>
          </ul>
        </section>

        <section className="section">
          <h2>Projects</h2>
          <ul>
            <li>cloud detection</li>
            <li>lung cancer detection</li>
            <li>travel website</li>
            <li>water alarm</li>
          </ul>
        </section>

        <section className="section">
          <h2>Contact</h2>
          <a href="mailto:bandaruaishwarya441@gmail.com">Email me</a>
        </section>
      </div>
    </div>
  );
}

export default App; // Add this export statement to make the component available for use in other parts of your application
