import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Gallery from "./pages/Gallery";
import BookingForm from "./components/BookingForm";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import TourDetails from "./components/TourDetails";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour/:id" element={<TourDetails />} />
        <Route path="about" element={<About />} />
        <Route path="activities" element={<Activities />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/booking/:id" element={<BookingForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
