import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";

import Navbar from "./Components/UI Components/Navbar/Navbar";
import Footer from "./Components/UI Components/Footer/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
