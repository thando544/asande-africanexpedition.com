
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import About from "./pages/About"
import Activities from "./pages/Activities"
import Gallery from "./pages/Gallery"
import Testimonials from "./pages/Testimonials"
import Contact from "./pages/Contact"
import Navbar from './components/Navbar'
function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='activities' element={<Activities/>} />
        <Route path='gallery' element={<Gallery/>} />
        <Route path='testimonials' element={<Testimonials/>} />
        <Route path='contact' element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App
