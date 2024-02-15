import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
