import './App.css';
import Home from './components/pages/Home';
import Works from './components/pages/Works';
import Contact from './components/pages/Contact';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <> 
      <Navbar />
      <div className='container'>
        <Home />
        <Works />
        <Contact />
      </div>
    </>
   
  );
}
