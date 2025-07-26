import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import Extracurriculars from './components/Extracurricular';
import Footer from './components/Footer';

export default function App() {
  // Set dark mode by default
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <main className="bg-white dark:bg-black text-black dark:text-white font-mono min-h-screen transition-colors">
      <Navbar />
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="education"><Education /></section>
        <section id="extracurriculars"><Extracurriculars /></section>
        <section id="contact"><Contact /></section>
      <Footer />
    </main>
  );
}
