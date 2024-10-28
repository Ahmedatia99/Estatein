import "./assets/style/main.css";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Properties from "./pages/Properties.jsx";
import Contact from "./pages/Contact.jsx";
import Service from "./pages/Service.jsx";
import Navbar from "./components/atoms/Navbar.jsx";
import Banner from "./components/atoms/Banner.jsx";
import Footer from "./components/atoms/Footer.jsx";
import CTA from "./components/atoms/CTA.jsx";
function App() {
  return (
    <main>
      <Banner />
      <Navbar />
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Properties />} />
          <Route path="pricing" element={<Service />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <CTA />
      <Footer />
    </main>
  );
}

export default App;
