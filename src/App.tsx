import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";
import Work from "./Components/Work/Work";


export default function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}
