import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Services from "./components/Services";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Team from "./components/Team";
import Clients from "./components/Clients";
import FAQ from "./components/Faq";
import Contact from "./components/Contact";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Services />
      <About />
      <Pricing />
      <Team />
      <Clients />
      <FAQ />
      <Contact />
      <Brands />
      <Footer />
    </div>
  );
}

export default App;
