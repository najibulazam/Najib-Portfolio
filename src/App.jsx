import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import RealWorldWork from './components/RealWorldWork';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import Leadership from './components/Extracurricular';
import Footer from './components/Footer';
import Layout from './components/Layout';
import BackToTop from './components/BackToTop';

export default function App() {
  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = window.localStorage.getItem('theme');

    // Respect explicit user choice first.
    if (savedTheme === 'dark' || savedTheme === 'light') {
      root.classList.toggle('dark', savedTheme === 'dark');
      return undefined;
    }

    // Otherwise follow the OS preference and keep it in sync.
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const syncTheme = (isDark) => root.classList.toggle('dark', isDark);

    syncTheme(media.matches);

    const onChange = (event) => syncTheme(event.matches);
    media.addEventListener('change', onChange);

    return () => media.removeEventListener('change', onChange);
  }, []);

  return (
    <Layout>
      <Navbar />
      <main>
        <Home />
        <Experience />
        <RealWorldWork />
        <Projects />
        <Education />
        <Leadership />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </Layout>
  );
}
