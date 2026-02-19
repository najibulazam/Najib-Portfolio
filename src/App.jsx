import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import Leadership from './components/Extracurricular';
import Footer from './components/Footer';
import Layout from './components/Layout';
import BackToTop from './components/BackToTop';

export default function App() {
  // Set dark mode by default
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <Layout>
      <Navbar />
      <Home />
      <Experience />
      <Projects />
      <Education />
      <Leadership />
      <Contact />
      <Footer />
      <BackToTop />
    </Layout>
  );
}
